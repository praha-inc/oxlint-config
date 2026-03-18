import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, it, expect } from 'vitest';

import { eslint } from './eslint';

describe('eslint', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(eslint().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('eslint')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(eslint().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
