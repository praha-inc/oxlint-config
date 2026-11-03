import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { eslint } from './eslint';

describe('eslint', () => {
  test.todo('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...eslint().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('eslint')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...eslint().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
