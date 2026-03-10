import { describe, it, expect } from 'vitest';

import { imports } from './imports';
import { fetchRules } from '../test/fetch-rules';

describe('imports', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(imports().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('import')));
  });
});
