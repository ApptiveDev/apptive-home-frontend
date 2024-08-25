import baseBestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import baseErrors from 'eslint-config-airbnb-base/rules/errors';
import baseES6 from 'eslint-config-airbnb-base/rules/es6';
import baseImports from 'eslint-config-airbnb-base/rules/imports';
import baseStyle from 'eslint-config-airbnb-base/rules/style';
import baseVariables from 'eslint-config-airbnb-base/rules/variables';

import tsstylistic from '@stylistic/eslint-plugin-ts';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['node_modules/*', '.yarn/*', '.storybook/*', '**.config.*'],
        languageOptions: {
            parserOptions: {
              project: ['./tsconfig.app.json']
            },
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            '@stylistic/ts': tsstylistic,
            'import': importPlugin,
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
            },
            'import/resolver': {
                node: {
                    extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
                },
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.app.json',
                },
            },
            'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        },
        rules: {
            '@stylistic/ts/brace-style': baseStyle.rules['brace-style'],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],
            '@stylistic/ts/comma-dangle': [
                baseStyle.rules['comma-dangle'][0],
                {
                    ...baseStyle.rules['comma-dangle'][1],
                    enums: baseStyle.rules['comma-dangle'][1].arrays,
                    generics: baseStyle.rules['comma-dangle'][1].arrays,
                    tuples: baseStyle.rules['comma-dangle'][1].arrays,
                },
            ],
            '@stylistic/ts/comma-spacing': baseStyle.rules['comma-spacing'],
            '@typescript-eslint/default-param-last': baseBestPractices.rules['default-param-last'],
            '@typescript-eslint/dot-notation': baseBestPractices.rules['dot-notation'],
            '@stylistic/ts/func-call-spacing': baseStyle.rules['func-call-spacing'],
            '@stylistic/ts/indent': baseStyle.rules.indent,
            '@stylistic/ts/keyword-spacing': baseStyle.rules['keyword-spacing'],
            '@stylistic/ts/lines-between-class-members': baseStyle.rules['lines-between-class-members'],
            '@typescript-eslint/no-array-constructor': baseStyle.rules['no-array-constructor'],
            '@typescript-eslint/no-dupe-class-members': baseES6.rules['no-dupe-class-members'],
            '@typescript-eslint/no-empty-function': baseBestPractices.rules['no-empty-function'],
            '@stylistic/ts/no-extra-parens': baseErrors.rules['no-extra-parens'],
            '@stylistic/ts/no-extra-semi': baseErrors.rules['no-extra-semi'],
            '@typescript-eslint/no-implied-eval': baseBestPractices.rules['no-implied-eval'],
            '@typescript-eslint/no-loss-of-precision': baseErrors.rules['no-loss-of-precision'],
            '@typescript-eslint/no-loop-func': baseBestPractices.rules['no-loop-func'],
            '@typescript-eslint/no-magic-numbers': baseBestPractices.rules['no-magic-numbers'],
            '@typescript-eslint/no-redeclare': baseBestPractices.rules['no-redeclare'],
            '@typescript-eslint/no-shadow': baseVariables.rules['no-shadow'],
            '@stylistic/ts/space-before-blocks': baseStyle.rules['space-before-blocks'],
            // '@typescript-eslint/no-throw-literal': baseBestPractices.rules['no-throw-literal'],
            '@typescript-eslint/no-unused-expressions': baseBestPractices.rules['no-unused-expressions'],
            '@typescript-eslint/no-unused-vars': baseVariables.rules['no-unused-vars'],
            // '@typescript-eslint/no-use-before-define': baseVariables.rules['no-use-before-define'],
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-useless-constructor': baseES6.rules['no-useless-constructor'],
            '@stylistic/ts/quotes': baseStyle.rules.quotes,
            '@stylistic/ts/semi': baseStyle.rules.semi,
            '@stylistic/ts/space-before-function-paren': baseStyle.rules['space-before-function-paren'],
            '@typescript-eslint/require-await': baseBestPractices.rules['require-await'],
            '@typescript-eslint/return-await': [baseBestPractices.rules['no-return-await'], 'in-try-catch'],
            '@stylistic/ts/space-infix-ops': baseStyle.rules['space-infix-ops'],
            '@stylistic/ts/object-curly-spacing': baseStyle.rules['object-curly-spacing'],

            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/no-extraneous-dependencies': [
                baseImports.rules['import/no-extraneous-dependencies'][0],
                {
                    ...baseImports.rules['import/no-extraneous-dependencies'][1],
                    devDependencies: baseImports.rules[
                      'import/no-extraneous-dependencies'
                      ][1].devDependencies.reduce((result, devDep) => {
                        const toAppend = [devDep];
                        const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
                        if (devDepWithTs !== devDep) {
                            toAppend.push(devDepWithTs);
                        }
                        return [...result, ...toAppend];
                    }, []),
                },
            ],
        },
    },
];
