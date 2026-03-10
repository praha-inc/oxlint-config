import { describe, it, expect } from 'vitest';

import { typescript } from './typescript';
import { fetchRules } from '../test/fetch-rules';

describe('typescript', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(typescript().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('typescript')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(typescript().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
