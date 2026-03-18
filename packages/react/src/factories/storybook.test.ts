import { rules as storybookRules } from 'eslint-plugin-storybook';
import { describe, it, expect } from 'vitest';

import { storybook } from './storybook';

describe('storybook', () => {
  it('should include all rules from storybook', () => {
    const rules = storybook().overrides.flatMap((override) => Object.keys(override.rules ?? {}));

    expect(rules).toEqual(
      expect.arrayContaining(
        Object.keys(storybookRules).map((rule) => `storybook/${rule}`),
      ),
    );
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(storybook().overrides[0]?.rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });
});
