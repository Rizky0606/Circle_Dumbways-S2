import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4000,
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
