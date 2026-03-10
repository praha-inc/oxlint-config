import eslintPluginStylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'oxlint';

import type { DummyRuleMap } from 'oxlint';

export const stylistic = () => defineConfig({
  jsPlugins: [
    { name: '@stylistic', specifier: '@stylistic/eslint-plugin' },
  ],
  rules: eslintPluginStylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    arrowParens: true,
    braceStyle: '1tbs',
    blockSpacing: true,
    quoteProps: 'consistent-as-needed',
    commaDangle: 'always-multiline',
  }).rules as DummyRuleMap,
  overrides: [
    {
      files: ['*'],
      rules: {
        '@stylistic/jsx-newline': ['error', {
          prevent: true,
        }],
        '@stylistic/jsx-one-expression-per-line': ['error', {
          allow: 'single-line',
        }],
        '@stylistic/multiline-ternary': 'off',

        // '@stylistic/array-bracket-newline': 'off',
        // '@stylistic/array-element-newline': 'off',
        // '@stylistic/curly-newline': 'off',
        // '@stylistic/function-call-argument-newline': 'off',
        // '@stylistic/function-call-spacing': 'off',
        // '@stylistic/function-paren-newline': 'off',
        // '@stylistic/implicit-arrow-linebreak': 'off',
        // '@stylistic/jsx-child-element-spacing': 'off',
        // '@stylistic/jsx-indent': 'off',
        // '@stylistic/jsx-pascal-case': 'off',
        // '@stylistic/jsx-props-no-multi-spaces': 'off',
        // '@stylistic/exp-jsx-props-style': 'off',
        // '@stylistic/jsx-self-closing-comp': 'off',
        // '@stylistic/jsx-sort-props': 'off',
        // '@stylistic/line-comment-position': 'off',
        // '@stylistic/linebreak-style': 'off',
        // '@stylistic/lines-around-comment': 'off',
        // '@stylistic/exp-list-style': 'off',
        // '@stylistic/max-len': 'off',
        // '@stylistic/multiline-comment-style': 'off',
        // '@stylistic/newline-per-chained-call': 'off',
        // '@stylistic/no-confusing-arrow': 'off',
        // '@stylistic/no-extra-semi': 'off',
        // '@stylistic/nonblock-statement-body-position': 'off',
        // '@stylistic/object-curly-newline': 'off',
        // '@stylistic/object-property-newline': 'off',
        // '@stylistic/one-var-declaration-per-line': 'off',
        // '@stylistic/padding-line-between-statements': 'off',
        // '@stylistic/semi-style': 'off',
        // '@stylistic/switch-colon-spacing': 'off',
        // '@stylistic/wrap-regex': 'off',
      },
    },
  ],
});
