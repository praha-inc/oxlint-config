import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { imports } from './imports';

describe('imports', () => {
  test('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...imports().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('import')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...imports().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
