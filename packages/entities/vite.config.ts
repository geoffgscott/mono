import {
    fileURLToPath,
    URL
} from 'node:url'

import {
    defineConfig,
    UserConfig
} from 'vite'
import { InlineConfig } from 'vitest'
import { configDefaults } from 'vitest/config'

interface VitestConfigExport extends UserConfig {
    test: InlineConfig,
}

const config: VitestConfigExport = {
    resolve: {
        alias: {
            '@test': fileURLToPath(new URL('./test', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        emptyOutDir: false,
        outDir: 'dist',
        sourcemap: true,
        lib: {
            entry: {
                utility: 'src/utility/index.ts',
                team: 'src/team/index.ts',
                user: 'src/user/index.ts',
            },
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['zod'],
        },
    },
    server: {
        port: 7070,
    },
    test: {
        exclude: [...configDefaults.exclude],
        environment: 'jsdom',
        globals: true,
        coverage: {
            all: true,
            include: ['src/**'],
            provider: 'istanbul',
        },
    },
}

export default defineConfig(config)

