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
  <h3>...using Nuxt 3 and UnoCSS</h3>
</template>
