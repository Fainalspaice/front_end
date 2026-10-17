import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (!env.VITE_URL_SITE) {
    throw new Error('Defina VITE_URL_SITE no arquivo .env');
  }

  const proxy = {
    '/api-econverse': {
      target: new URL(env.VITE_URL_SITE).origin,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api-econverse/, ''),
    },
  };

  return {
    plugins: [react()],
    server: {
      port: 5173,
      strictPort: true,
      proxy,
      watch: { usePolling: true, interval: 1000 },
    },
    preview: { proxy },
  };
});