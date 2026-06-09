import oxlintByethrowPlugin from '@praha/byethrow-oxlint';
import { defineConfig } from 'oxlint';

export const byethrow = () => defineConfig({
  extends: [
    oxlintByethrowPlugin.recommended,
  ],
  rules: {
    'byethrow/consistent-namespace': ['error', 'R'],
  },
});
