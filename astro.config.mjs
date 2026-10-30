import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://hack.naal.org.tr",
  vite: {
    plugins: [tailwindcss()],
  },
})
