import js from '@eslint/js';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactCompiler from 'eslint-plugin-react-compiler';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';

export const recommended: Record<string, unknown>[] = [
  js.configs.recommended,

  ...(ts.configs.recommended as Record<string, unknown>[]),

  {
    files: [ '**/tailwind.config.{ts,js}', '**/postcss.config.{ts,js}' ],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ],
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
  {
    settings: {
      tailwindcss: {
        callees: [ 'classnames', 'clsx', 'ctl', 'cn', 'twMerge' ],
      }
    }
  },

  /**
   * React Plugins
   * 
   * Includes: React, React Hooks, React Compiler
   */
  {
    files: [ '**/*.{jsx,tsx}' ],
    plugins: {
      'react': fixupPluginRules(react),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs?.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      ...reactHooks.configs?.recommended.rules,
    },
  },
  {
    plugins: {
      'react-compiler': fixupPluginRules(reactCompiler),
    },
    rules: {
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
