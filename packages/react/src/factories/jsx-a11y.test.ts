import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { jsxA11y } from './jsx-a11y';

describe('jsxA11y', () => {
  test('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...jsxA11y().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('jsx-a11y')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...jsxA11y().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
