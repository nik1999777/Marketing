import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_APP_ENDPOINT,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
      host: true,
    },
    plugins: [react(), svgr()],
  });
};
