import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { unicorn } from './unicorn';

describe('unicorn', () => {
  test.todo('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...unicorn().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('unicorn')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...unicorn().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
