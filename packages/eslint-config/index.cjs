module.exports = {
    env: {
        browser: true,
        es2023: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 2],
        'eol-last': ['error', 'always'],
    },
    overrides: [
        {
          files: ['**/*.cjs'],
          env: {
            es2023: true,
            node: true,
          },
        },
      ],
  }