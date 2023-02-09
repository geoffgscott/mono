import {
    fileURLToPath,
    URL
} from 'node:url'

import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
    resolve: {
        alias: {
            '@test': fileURLToPath(new URL('./test', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 7000,
    },
    test: {
        exclude: [...configDefaults.exclude],
        environment: 'node',
        globals: true,
        coverage: {
            include: ['src/**'],
            provider: 'istanbul',
        },
    },
})

