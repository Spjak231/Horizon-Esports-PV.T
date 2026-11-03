import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite dev server proxies /api requests to the Express backend
// (run `npm run server` in another terminal, then `npm run dev`)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
});
