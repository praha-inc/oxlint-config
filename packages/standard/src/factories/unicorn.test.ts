import { describe, it, expect } from 'vitest';

import { unicorn } from './unicorn';
import { fetchRules } from '../test/fetch-rules';

describe('unicorn', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(unicorn().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('unicorn')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(unicorn().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
