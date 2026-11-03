import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { next } from './next';

describe('next', () => {
  test('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...next().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('nextjs')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...next().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
