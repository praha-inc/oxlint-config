import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { typescript } from './typescript';

describe('typescript', () => {
  test.todo('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...typescript().rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('typescript')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...typescript().rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
