import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        environment: 'jsdom',
    },
});
