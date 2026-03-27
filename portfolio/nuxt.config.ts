// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  telemetry: false,

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Asadbek Umarov — Frontend Developer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Junior Frontend Developer specializing in React, TypeScript & Next.js. Building fast, modern, and user-friendly web applications. Based in Tashkent, Uzbekistan — open to remote opportunities worldwide.",
        },
        { name: "author", content: "Asadbek Umarov" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#6366f1" },

        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Asadbek Umarov — Frontend Developer",
        },
        {
          property: "og:description",
          content:
            "Junior Frontend Developer specializing in React, TypeScript & Next.js. Based in Tashkent, Uzbekistan.",
        },
        { property: "og:locale", content: "en_US" },

        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Asadbek Umarov — Frontend Developer",
        },
        {
          name: "twitter:description",
          content:
            "Junior Frontend Developer specializing in React, TypeScript & Next.js.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
});
