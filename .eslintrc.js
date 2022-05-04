const { defineConfig } = require('eslint-define-config')
modele.exports = defineConfig({
    env: {
        es6: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                ecmaVersion: 'latest'
            },
            extends: ['plugin:vue/vue3-recommended']
        }
    ]
})