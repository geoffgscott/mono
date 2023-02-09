import { fileURLToPath } from 'url'

import {
    defineConfig,
    configDefaults
} from 'vitest/config'

// Need to run integration tests using a browser environment (jsdom)
export default defineConfig({
    resolve: {
        alias: {
            '@test': fileURLToPath(new URL('../test', import.meta.url)),
            '@': fileURLToPath(new URL('../src', import.meta.url)),
        },
    },
    test: {
        globalSetup: 'test/setupTests.ts',
        exclude: [...configDefaults.exclude],
        environment: 'jsdom',
        globals: true,
    },
})
