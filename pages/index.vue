<script setup lang="ts">
import { isDark } from "~/composables/dark";

useHead({
  title: "Patrik Bird",
  meta: [
    { name: "description", content: "My personal website" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
  // link: [
  //   {
  //     rel: "icon",
  //     type: "image/svg+xml",
  //     href: computed(() =>
  //       preferredDark.value ? "/favicon-dark.svg" : "/favicon.svg"
  //     ),
  //   },
  // ],
});

definePageMeta({
  layout: "home",
});
</script>

<template>
  <h1>This will be my new Website</h1>
  <main>
    ...using <a href="https://v3.nuxtjs.org">Nuxt 3</a> and
    <a href="https://uno.antfu.me">UnoCSS</a>
  </main>
</template>
