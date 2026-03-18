import { describe, it, expect } from 'vitest';

import { react } from './react';
import { fetchRules } from '../test/fetch-rules';

describe('react', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(react().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('react')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(react().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
