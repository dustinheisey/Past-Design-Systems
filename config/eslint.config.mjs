import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  { ignores: ['_site', 'node_modules', 'scripts/index.min.js'] }
];
