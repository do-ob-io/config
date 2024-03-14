import { defineConfig, mergeConfig } from 'vite';
import viteLibConfig from './src/index';

export default mergeConfig(
  viteLibConfig(),
  defineConfig({}),
);
