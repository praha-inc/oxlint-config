import { fetchRules } from '@praha/oxlint-config-internal/test';
import { describe, expect, test } from 'vitest';

import { vitest } from './vitest';

describe('vitest', () => {
  test('should include all rules from oxc_linter', async () => {
    const rules = Object.keys({ ...vitest().overrides[0]?.rules });

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('vitest')));
  });

  test('should have rules in ascending order', () => {
    const rules = Object.keys({ ...vitest().overrides[0]?.rules });

    expect(rules).toEqual(rules.toSorted());
  });
});
