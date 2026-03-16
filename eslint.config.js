import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
];
