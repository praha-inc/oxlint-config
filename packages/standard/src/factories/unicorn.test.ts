import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, it, expect } from 'vitest';

import { unicorn } from './unicorn';

describe('unicorn', () => {
  it.skip('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(unicorn().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('unicorn')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(unicorn().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
