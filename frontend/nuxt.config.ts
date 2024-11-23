// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // You can change it to true (not recommended) to make the app start up slightly faster at the cost of larger binary size
  ssr: false,
  nitro: {
    output: {
      dir: process.env.NODE_ENV === "development" ? ".output-dev" : ".output",
      serverDir:
        process.env.NODE_ENV === "development"
          ? ".output-dev/server"
          : ".output/server",
      publicDir:
        process.env.NODE_ENV === "development"
          ? ".output-dev/public"
          : ".output/public",
    },
  },
  imports: {
    dirs: [
      "wailsjs/runtime/**", // Auto-import wails runtime
    ],
  },

  compatibilityDate: "2024-11-23",
});
