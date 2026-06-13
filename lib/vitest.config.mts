import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    tsconfigPaths: true
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    coverage: {
      include: ["src/**"],
      exclude: ["src/**/*.test.*", "src/**/declaration.d.ts"],
      reporter: ["text", "json", "clover", "html"],
    },
  },
});
