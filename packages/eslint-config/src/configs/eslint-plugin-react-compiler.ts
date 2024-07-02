declare module 'eslint-plugin-react' {
  export type Plugin = import("eslint").ESLint.Plugin;
  export const plugin: Plugin & {
    configs: {
      recommended: {
        rules: Record<string, unknown>[];
      }
    }
  };
  export default plugin;
}

declare module 'eslint-plugin-react-hooks' {
  export type Plugin = import("eslint").ESLint.Plugin;
  export const plugin: Plugin & {
    configs: {
      recommended: {
        rules: Record<string, unknown>[];
      }
    }
  };
  export default plugin;
}

declare module 'eslint-plugin-react-compiler' {
  export type Plugin = import("eslint").ESLint.Plugin;
  export const plugin: Plugin;
  export default plugin;
  export const rules: {
    recommended: Record<string, unknown>[];
  };
}
