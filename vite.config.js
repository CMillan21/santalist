import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';



export default defineConfig({
    server: {
        host: 'proyectobiblioteca.com',
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'proyectobiblioteca.com',
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
