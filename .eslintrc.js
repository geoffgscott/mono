module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
    },
    plugins: ['canonical', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:vue/base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
        '@vue/eslint-config-typescript',
    ],
    settings: {
        'import/extensions': ['.js', '.ts', '.vue', '.css', 'json'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        // ---------------------------------------------------------------------------
        // Formatting
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', { multiline: true }],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'indent': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ignoredNodes: ['TSTypeParameterInstantiation', 'TSIntersectionType'],
            },
        ],
        'key-spacing': ['error', { mode: 'strict' }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'max-statements-per-line': ['error', { max: 2 }],
        'multiline-ternary': 'off',
        'new-parens': 'error',
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-trailing-spaces': 'error',
        'no-irregular-whitespace': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            2,
            {
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
        'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'padded-blocks': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'consistent-as-needed'],
        'rest-spread-spacing': ['error', 'never'],
        'semi': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'curly': ['error'],
        'spaced-comment': ['error', 'always'],
        // ---------------------------------------------------------------------------
        // Checks
        'consistent-return': 'warn',
        'guard-for-in': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-inner-declarations': ['warn'],
        'no-param-reassign': 'warn',
        'no-return-assign': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'radix': ['error'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'comma',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        // ---------------------------------------------------------------------------
        // Import
        'import/no-unresolved': 'off',
        'canonical/import-specifier-newline': 'error',
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                'alphabetize': {
                    order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
                    caseInsensitive: true, /* ignore case. Options: [true, false] */
                },
            },
        ],
        'import/default': 'off',
        'import/first': 'error',
        'import/named': 'off',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
    overrides: [
        {
            files: ['.eslintrc.js'],
            env: {
                node: true,
            },
        },
        {
            files: ['**.d.ts'],
            rules: {
                'spaced-comment': 'off',
            },
        },
        {
            files: ['**.test.ts'],
            rules: {
                'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
            },
        },
        {
            files: ['**.vue'],
            rules: {
                'max-len': 'off',
                'vue/max-len': [
                    'error',
                    {
                        code: 120,
                        template: 150,
                        ignoreHTMLAttributeValues: true,
                        ignoreHTMLTextContents: true,
                    },
                ],
                'comma-dangle': 'off',
                'vue/comma-dangle': [
                    'error',
                    {
                        arrays: 'always-multiline',
                        objects: 'always-multiline',
                        imports: 'never',
                        exports: 'never',
                        functions: 'never',
                    },
                ],
                'vue/max-attributes-per-line': [
                    'error',
                    {
                        singleline: {
                            max: 1,
                        },
                        multiline: {
                            max: 1,
                        },
                    },
                ],
                'vue/first-attribute-linebreak': [
                    'error',
                    {
                        singleline: 'ignore',
                        multiline: 'below',
                    },
                ],
                'vue/html-indent': [
                    'error',
                    4,
                    {
                        attribute: 1,
                        baseIndent: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: [],
                    },
                ],
                'vue/multi-word-component-names': ['off'],
                'vue/order-in-components': 'error',
                'vue/attributes-order': [
                    'error',
                    {
                        order: [
                            'DEFINITION',
                            'LIST_RENDERING',
                            'CONDITIONALS',
                            'RENDER_MODIFIERS',
                            'GLOBAL',
                            ['UNIQUE', 'SLOT'],
                            'TWO_WAY_BINDING',
                            'OTHER_DIRECTIVES',
                            'OTHER_ATTR',
                            'EVENTS',
                            'CONTENT',
                        ],
                        alphabetical: true,
                    },
                ],
                'vue/no-unused-properties': 'error',
                'vue/html-closing-bracket-newline': [
                    'error',
                    {
                        singleline: 'never',
                        multiline: 'never',
                    },
                ],
                'vue/attribute-hyphenation': ['error', 'never'],
                'vue/no-lone-template': ['error'],
                'vue/this-in-template': ['error', 'never'],
                'vue/component-api-style': ['error', ['script-setup']],
                // 'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],
                'vue/define-props-declaration': ['error', 'type-based'],
                'vue/define-emits-declaration': ['error', 'type-based'],
                'vue/html-button-has-type': [
                    'error',
                    {
                        button: true,
                        submit: true,
                        reset: true,
                    },
                ],
                'vue/v-on-event-hyphenation': ['error', 'never'],
                'vue/require-default-prop': 0,
            },
        },
    ],
}
