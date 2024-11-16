import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import prettier from 'prettier';
import globals from 'globals';
import js from '@eslint/js';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'plugin:prettier/recommended': prettier,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: ['parameter', 'variable'],
					leadingUnderscore: 'require',
					format: ['camelCase'],
					modifiers: ['unused'],
				},
				{
					selector: ['parameter', 'variable'],
					leadingUnderscore: 'allowDouble',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				},
			],
			'no-console': ['error'],
		},
	},
);
