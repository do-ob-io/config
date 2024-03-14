<p align="center">
  <img
    width="256"
    src="https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true"
    alt="do-ob logo"
  />
</p>

# TypeScript ESM Configuration

A standard base configuration for linting modern TypeScript ESM projects. Ideal for NodeJS libraries or applications.

## Installation

Install the configuration package with NPM or PNPM.

```sh
npm install -D @do-ob/eslint-config
```

```sh
pnpm add -D @do-ob/eslint-config
```

Extend the package's `.eslintrc.{json,js,cjs}`.

```json
{
  "extends": ["@do-ob/eslint-config"]
}
```