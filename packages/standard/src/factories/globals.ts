import { convertGlobals } from '@praha/oxlint-config-internal';
import g from 'globals';
import { defineConfig } from 'oxlint';

export const globals = () => defineConfig({
  globals: {
    ...convertGlobals(g.browser),
    ...convertGlobals(g.es2021),
    ...convertGlobals(g.node),
    ...convertGlobals(g.vitest),
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
});
