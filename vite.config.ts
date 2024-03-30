import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SITE_KEY_RECAPTCHA': JSON.stringify(env.SITE_KEY_RECAPTCHA),
      'process.env.PRIVATE_KEY_RECAPTCHA': JSON.stringify(env.PRIVATE_KEY_RECAPTCHA)

    },
    plugins: [react()],
  }
})
