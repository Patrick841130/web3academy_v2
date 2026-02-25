import { defineConfig } from 'vite';

export default defineConfig({
    // SPA fallback: all routes serve index.html
    appType: 'spa',
    server: {
        proxy: {
            '/api': 'http://localhost:3001'
        }
    }
});
