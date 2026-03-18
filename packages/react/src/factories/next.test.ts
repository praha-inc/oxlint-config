import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, it, expect } from 'vitest';

import { next } from './next';

describe('next', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(next().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('nextjs')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(next().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
