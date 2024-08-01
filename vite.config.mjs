import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createBlockletPlugin } from 'vite-plugin-blocklet';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    plugins: [react(), createBlockletPlugin(), svgr()],
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:4000', 
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
    // build: {
    //   rollupOptions: {
    //     input: {
    //       main: path.resolve(__dirname, 'index.html'),
    //     },
    //   },
    // },
  };
});
