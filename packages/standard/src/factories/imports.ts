import { defineConfig } from 'oxlint';

export const imports = () => defineConfig({
  plugins: [
    'import',
  ],
  jsPlugins: [
    { name: 'import-x-js', specifier: 'eslint-plugin-import-x' }
  ],
  rules: {
    // Built-in import plugin
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'error',

    // eslint-plugin-import-x
    'import-x-js/newline-after-import': ['error', {
      count: 1,
    }],
    'import-x-js/no-useless-path-segments': 'error',
    'import-x-js/order': ['error', {
      'groups': ['builtin', 'external', 'internal', ['index', 'parent', 'sibling'], 'object', 'type'],
      'newlines-between': 'always',
      'pathGroupsExcludedImportTypes': ['builtin'],
      'alphabetize': { order: 'asc', caseInsensitive: true },
    }],
  },
});
