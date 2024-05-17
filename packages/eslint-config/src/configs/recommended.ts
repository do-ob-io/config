import js from '@eslint/js';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export const recommended: Record<string, unknown>[] = [
  js.configs.recommended,

  ...(ts.configs.recommended as Record<string, unknown>[]),

  {
    files: ['**/tailwind.config.{ts,js}', '**/postcss.config.{ts,js}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'off',
    }
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/eol-last': ['error', 'always'],
    }
  },

  {
    ignores: [
      '**/node_modules/**',
      '**/storybook-static/**',
      '**/dist/**',
      '**/lib/**',
      '**/build/**',
      '**/out/**',
      '**/_*/**',
    ]
  }
];

export default recommended;
