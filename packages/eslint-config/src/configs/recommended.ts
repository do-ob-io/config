import js from '@eslint/js';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';
import reactCompiler from 'eslint-plugin-react-compiler';
import globals from 'globals';

export const recommended: Record<string, unknown>[] = [
  js.configs.recommended,

  ...(ts.configs.recommended as Record<string, unknown>[]),

  {
    files: [ '**/tailwind.config.{ts,js}', '**/postcss.config.{ts,js}' ],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'off',
    }
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: [ '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx' ],
    rules: {
      '@stylistic/semi': [ 'error', 'always' ],
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/eol-last': [ 'error', 'always' ],
      '@stylistic/comma-dangle': [ 'error', 'only-multiline' ],
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/jsx-quotes': [ 'error', 'prefer-double' ],
    }
  },

  {
    files: [ '*.js' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      }
    }
  },

  {
    files: [ '*.cjs' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.node,
      }
    }
  },

  /**
   * Tailwind CSS
   */
  ...tailwind.configs['flat/recommended'],

  /**
   * React Compiler
   */
  {
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      ...reactCompiler.rules.recommended,
      'react-compiler/react-compiler': 'error',
    },
  },

  /**
   * Ignore some common artifact directories
   */
  {
    ignores: [
      '**/node_modules/**',
      '**/storybook-static/**',
      '**/dist/**',
      '**/lib/**',
      '**/build/**',
      '**/out/**',
      '**/_*/**',
      '**/.next/**',
    ]
  }
];

export default recommended;
