import js from '@eslint/js';
import ts from 'typescript-eslint';

export const recommended: Record<string, unknown>[] = [
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
    rules: {
      ...js.configs.recommended.rules,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'eol-last': ['error', 'always'],
    }
  },
  ...ts.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    files: ['tailwind.config.{ts,js}', 'postcss.config.{ts,js}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'off',
    }
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**']
  }
];

export default recommended;
