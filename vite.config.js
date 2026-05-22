import { defineConfig } from 'vite'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [cloudflare()],
    // Vite config options
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
    }
})