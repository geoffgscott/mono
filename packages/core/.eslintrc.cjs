module.exports = {
    env: {
        node: true,
    },
    ignorePatterns: ['dist/**'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    },
    settings: {
        'import/extensions': ['.js', '.ts', '.vue', '.css', 'json'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
                alias: {
                    '@': './src',
                    '@test': './test',
                },
                extensions: ['.js', '.ts', '.vue', '.css', 'json'],
            },
        },
    },

}
