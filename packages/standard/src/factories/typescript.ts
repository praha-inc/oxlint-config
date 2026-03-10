import { defineConfig } from 'oxlint';

export const typescript = () => defineConfig({
  overrides: [
    {
      files: [
        '**/*.?([cm])ts?(x)'
      ],
      plugins: [
        'eslint',
        'typescript',
      ],
      rules: {
        // Disable rules that are handled by typescript-eslint plugin
        'eslint/constructor-super': 'off',
        'eslint/getter-return': 'off',
        'eslint/no-array-constructor': 'off',
        'eslint/no-class-assign': 'off',
        'eslint/no-const-assign': 'off',
        'eslint/no-dupe-class-members': 'off',
        'eslint/no-dupe-keys': 'off',
        'eslint/no-func-assign': 'off',
        'eslint/no-import-assign': 'off',
        'eslint/no-new-native-nonconstructor': 'off',
        'eslint/no-obj-calls': 'off',
        'eslint/no-redeclare': 'off',
        'eslint/no-setter-return': 'off',
        'eslint/no-this-before-super': 'off',
        'eslint/no-throw-literal': 'off',
        'eslint/no-undef': 'off',
        'eslint/no-unreachable': 'off',
        'eslint/no-unsafe-negation': 'off',
        'eslint/no-unused-expressions': 'off',
        'eslint/no-with': 'off',
        'eslint/prefer-promise-reject-errors': 'off',
        'eslint/require-await': 'off',
      },
    },
  ],
});
