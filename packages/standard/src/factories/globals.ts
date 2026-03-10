import g from 'globals';
import { defineConfig } from 'oxlint';

import { convertGlobals } from '../helpers/convert-globals';

export const globals = () => defineConfig({
  globals: {
    ...convertGlobals(g.browser),
    ...convertGlobals(g.es2021),
    ...convertGlobals(g.node),
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
});
