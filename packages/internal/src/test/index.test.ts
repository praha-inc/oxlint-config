import { describe, expect, it, vi } from 'vitest';

import { fetchRules } from './index';

describe('fetchRules', () => {
  it('should fetch and format rules for a plugin', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ name: 'no_console.rs' }, { name: 'no_debugger.rs' }]),
      } as Response);

    const rules = await fetchRules('eslint');

    expect(rules).toEqual(['eslint/no-console', 'eslint/no-debugger']);
  });

  it('should merge vitest rules with compatible jest rules', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ name: 'expect.rs' }, { name: 'no_disabled_tests.rs' }]),
      } as Response)
      .mockResolvedValueOnce({
        json: () => Promise.resolve({ content: btoa(JSON.stringify(['expect', 'no-hooks'])) }),
      } as Response);

    const rules = await fetchRules('vitest');

    expect(rules).toEqual(['vitest/expect', 'vitest/no-disabled-tests', 'vitest/no-hooks']);
  });
});
