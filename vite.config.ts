import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  const allowedHosts = [
    'knsahub-knsahub-app.pphnmy.easypanel.host',
    'knsahub.com',
    'www.knsahub.com',
  ];

  return {
    server: {
      port: 4173,
      host: '0.0.0.0',
      allowedHosts,
    },
    preview: {
      port: 4173,
      host: '0.0.0.0',
      allowedHosts,
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
