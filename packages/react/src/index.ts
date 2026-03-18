import { defineConfig } from 'oxlint';

import { jsxA11y } from './factories/jsx-a11y';
import { next } from './factories/next';
import { react as react_ } from './factories/react';
import { storybook } from './factories/storybook';

import type { OxlintConfig } from 'oxlint';

export const react = (): OxlintConfig => {
  return defineConfig({
    extends: [
      jsxA11y(),
      react_(),
      next(),
      storybook(),
    ],
  });
};
