import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [
      [
        "icon-btn",
        "inline-block border-none p-0 bg-auto cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600",
      ],
    ],
    rules: [],
  },
  css: ["~/assets/styles/main.css"],
  // head: {
  //   title: "From the nuxt.config",
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: "Nuxt.js project" },
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  // },
});
