import eslintPluginStylistic from '@stylistic/eslint-plugin';
import { describe, it, expect } from 'vitest';

import { stylistic } from './stylistic';

describe('stylistic', () => {
  const config = eslintPluginStylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    arrowParens: true,
    braceStyle: '1tbs',
    blockSpacing: true,
    quoteProps: 'consistent-as-needed',
    commaDangle: 'always-multiline',
  });

  it.skip('should include all rules from stylistic', () => {
    const rules = Object.keys(stylistic().overrides[0]?.rules ?? {});

    expect(rules).toEqual(
      expect.arrayContaining([
        ...new Set(
          Object.keys(eslintPluginStylistic.rules)
            .map((rule) => `@stylistic/${rule}`),
        ).difference(new Set(Object.keys(config.rules ?? {}))),
      ]),
    );
  });

  it('should have rules in ascending order', () => {
    const rules = Object.keys(stylistic().overrides[0]?.rules ?? {});

    expect(rules).toEqual(rules.toSorted());
  });

  it('should have stylistic customized rules', () => {
    expect(stylistic().rules).toEqual(expect.objectContaining(config.rules));
  });
});
