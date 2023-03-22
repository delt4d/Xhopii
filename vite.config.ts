import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://delt4d.github.io/Xhopii/',
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
});
