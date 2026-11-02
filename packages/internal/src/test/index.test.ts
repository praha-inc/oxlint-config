import { describe, expect, test, vi } from 'vitest';

import { fetchRules } from './index';

describe('fetchRules', () => {
  test('should fetch and format rules for a plugin', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ name: 'no_console.rs' }, { name: 'no_debugger.rs' }]),
      } as Response);

    const rules = await fetchRules('eslint');

    expect(rules).toEqual(['eslint/no-console', 'eslint/no-debugger']);
  });
});
