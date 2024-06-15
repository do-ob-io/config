<p align="center">
  <img
    width="256"
    src="https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true"
    alt="do-ob logo"
  />
</p>

# TypeScript ESM Configuration

A standard base configuration for linting modern TypeScript ESM projects in the do-ob organization. Ideal for NodeJS libraries or applications.

:warning: This package is only compatible with ESLint 9.0.0 or higher.

## Installation

Install the configuration package with NPM or PNPM.

```sh
npm install -D @do-ob/eslint-config
```

```sh
pnpm add -D @do-ob/eslint-config
```

Extend the package's `eslint.config.{js,mjs,cjs}`.

```ts
import doob from '@do-ob/eslint-config';

export default [
  ...doob.configs.recommended,
];
```

## Includes the Following Recommended Configuration Packages

| Package | GitHub Repository |
|---------|------------------|
| `@eslint/js` | [eslint/eslint](https://github.com/eslint/eslint) |
| `typescript-eslint` | [typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) |
| `eslint-plugin-tailwindcss` | [francoismassart/eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) |
| `eslint-plugin-react-compiler` | [facebook/react](https://github.com/facebook/react/tree/main/compiler/packages/eslint-plugin-react-compiler) |

Feel free to explore the repositories for more information and documentation.


## Ignored Directories

The configuration package ignores the following directories by default:

- `node_modules`
- `storybook-static`
- `dist`
- `lib`
- `build`
- `out`
- `_`
- `.next`