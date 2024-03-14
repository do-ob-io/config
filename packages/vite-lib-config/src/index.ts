import { resolve } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig, LibraryFormats, Plugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

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
}

export function viteLibConfig({
    name: argName,
    srcDir = 'src',
    formats = ['es', 'cjs'],
}: ViteLibConfigOptions = {}) {
    const projectRoot = resolve(process.cwd(), '.');
    const srcRoot = resolve(projectRoot, srcDir);

    /**
     * Find all the entry file names in the srcRoot directory with the .ts or tsx extension
     */
    const entryFiles = readdirSync(srcRoot).filter((file) =>
        /\.(ts|tsx)$/.test(file)
    );

    /**
     * Generate the entry object for the lib option in the build option
     * with the entry file names (without file extensions) as the keys and
     * the full path to the entry file as the values.
     */
    const entry = entryFiles.reduce((acc, file) => {
        const key = file.replace(/\.(ts|tsx)$/, '');
        acc[key] = resolve(srcRoot, file);
        return acc;
    }, {});

    /**
     * Read both the dependencies and peerDependencies from the package.json file
     * and use them as the external dependencies for the rollupOptions.
     * 
     * Uses readFileSync to read the package.json file synchronously.
    */
    const packageJson = JSON.parse(
        readFileSync(resolve(projectRoot, 'package.json'), 'utf-8')
    );
    const external = [
        // Ensure any nodejs modules (that starts with "node:" prefix) are not bundled.
        /^node:/,
        ...Object.keys(packageJson.dependencies || {}).map(
            (key) => new RegExp(`^${key}(\/.*)?$`)
        ),
        ...Object.keys(packageJson.peerDependencies || {}).map(
            (key) => new RegExp(`^${key}(\/.*)?$`)
        ),
    ];

    /**
     * Create a library name based on the package name and convert it to pascal case.
     * Includes the package scope if it exists (but without the "@" prefix or any slashes).
     */
    const name = argName ?? packageJson.name
    .split('/')
    .pop()
    .replace(/(?:^|-)(\w)/g, (_, char) => char.toUpperCase());
    
    /**
     * Return the Vite config object with the plugins and build options.
     */
    return defineConfig({
        plugins: [
            tsconfigPaths() as Plugin
        ],
        build: {
            target: 'modules',
            lib: {
                entry,
                name,
                formats,
            },
            rollupOptions: {
                output: {
                    exports: 'named',
                },
                external: external,
            },
        }
    });
}

export default viteLibConfig;