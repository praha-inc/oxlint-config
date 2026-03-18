import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, it, expect } from 'vitest';

import { imports } from './imports';

describe('imports', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(imports().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('import')));
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(imports().rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
