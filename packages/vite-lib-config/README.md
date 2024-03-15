<p align="center">
  <img
    width="256"
    src="https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true"
    alt="do-ob logo"
  />
</p>

# Vite Library Configuration

Base configuration for building a NodeJS library package with Vite. This configuration is only for modern ESM TypeScript projects. TypeScript can be toggled off.

## Installation

Install the configuration package with NPM or PNPM.

```sh
npm install -D @do-ob/vite-lib-config
```

```sh
pnpm add -D @do-ob/vite-lib-config
```

## Usage

Simply merge with this configuration in `vite.config.ts`.

```ts
import { defineConfig, mergeConfig } from 'vite';
import viteLibConfig from '@do-ob/vite-lib-config';

export default mergeConfig(
  viteLibConfig(),
  defineConfig({
    /** Your configurations here **/
  }),
);
```

## Options

Options object that can be passed into the `viteLibConfig` function.

```ts
export interface ViteLibConfigOptions {
    /**
     * Custom library name.
     * 
     * By default, library name is generated from the package name.
     */
    name?: string;

    /**
     * The directory where the entry-point source files
     * (at the root of the directory tree) are located.
     * 
     * These are the entry files where you export your public API.
     * 
     * @default 'src'
     */
    srcDir?: string;

    /**
     * The Vite library formats to build.
     * 
     * @default ['es', 'cjs']
     */
    formats?: LibraryFormats[];

    /**
     * Enables/Disables TypeScript configurations.
     * 
     * @default true
     */
    typescript?: boolean;
}
```

Example

```ts
viteLibConfig({
  name: 'MyAwesomeLib',
  srcDir: 'src',
  formats: ['es', 'cjs', 'umd']
})
```