import { describe, it, expect } from 'vitest';

import { unicorn } from './unicorn';
import { fetchRules } from '../test/fetch-rules';

describe('unicorn', () => {
  it('should include all rules from oxc_linter', async () => {
    const rules = Object.keys(unicorn().rules ?? {});

    expect(rules).toEqual(expect.arrayContaining(await fetchRules('unicorn')));
  });
});
