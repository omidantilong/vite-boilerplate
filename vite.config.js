import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "@nabla/vite-plugin-eslint"
import svgrPlugin from "vite-plugin-svgr"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), eslintPlugin({ formatter: "stylish" })],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
})
