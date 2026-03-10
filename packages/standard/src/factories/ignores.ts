import { defineConfig } from 'oxlint';

export const ignores = () => defineConfig({
  ignorePatterns: [
    // Node modules
    '**/node_modules',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',

    // Test directories
    '**/coverage',
    '**/__snapshots__',

    // Build directories
    '**/dist',
    '**/.vercel',

    // Cache directories
    '**/.swc',
    '**/.turbo',

    // AWS CDK
    '**/cdk.out',
    '**/cdk.context.json',

    // Next.js
    '**/.next',
    '**/next-env.d.ts',
  ],
});
