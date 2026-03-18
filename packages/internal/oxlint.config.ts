import { defineConfig } from 'oxlint';

import { standard } from '../standard/dist/esm/index.js';

export default defineConfig({
  extends: [
    standard(),
  ],
});
