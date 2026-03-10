import { defineConfig } from 'oxlint';

import { standard } from './dist/esm/index.js';

export default defineConfig({
  extends: [
    standard(),
  ],
});
