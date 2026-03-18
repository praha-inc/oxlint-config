import { defineConfig } from 'oxlint';

export const storybook = () => defineConfig({
  plugins: [
    'react',
    'import',
  ],
  jsPlugins: [
    { name: 'storybook', specifier: 'eslint-plugin-storybook' },
  ],
  overrides: [
    {
      files: [
        '**/.storybook/main.*',
      ],
      rules: {
        'storybook/no-uninstalled-addons': 'error',
      },
    },
    {
      files: [
        '**/*.story.*',
        '**/*.stories.*',
      ],
      rules: {
        // Disable react rules that are not relevant for Storybook stories
        'react/rules-of-hooks': 'off',
        'import/no-anonymous-default-export': 'off',

        // Not Built-in storybook plugin
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/csf-component': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'error',
        'storybook/meta-inline-properties': 'off',
        'storybook/meta-satisfies-type': 'error',
        'storybook/no-redundant-story-name': 'error',
        'storybook/no-renderer-packages': 'error',
        'storybook/no-stories-of': 'error',
        'storybook/no-title-property-in-meta': 'off',
        'storybook/prefer-pascal-case': 'error',
        'storybook/story-exports': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
      },
    },
  ],
});
