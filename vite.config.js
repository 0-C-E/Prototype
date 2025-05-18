import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/Prototype/',
    plugins: [react()],
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
})
