import { defineConfig } from 'oxlint';

import { eslint } from './factories/eslint';
import { globals } from './factories/globals';
import { ignores } from './factories/ignores';
import { imports } from './factories/imports';
import { typescript } from './factories/typescript';
import { unicorn } from './factories/unicorn';

import type { OxlintConfig } from 'oxlint';

export const standard = (): OxlintConfig => {
  return defineConfig({
    extends: [
      ignores(),
      globals(),
      eslint(),
      typescript(),
      imports(),
      unicorn(),
    ],
    options: {
      reportUnusedDisableDirectives: 'error',
    },
  });
};
