module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    ignorePatterns: ['dist/**'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-undef': 'off',
        'import/named': 'off',
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

