import eslintPlugin from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslintPlugin.configs.recommended,
  ...tseslint.configs.recommended // Isso inclui as regras de "plugin:@typescript-eslint/eslint-recommended" e "plugin:@typescript-eslint/recommended"
);  