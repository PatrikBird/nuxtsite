<script setup lang="ts">
import { isDark } from "~/composables/dark";

useHead({
  title: "Patrik Bird",
  meta: [
    { name: "description", content: "My personal website" },
    // {
    //   name: "theme-color",
    //   content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    // },
  ],
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: computed(() =>
        preferredDark.value ? "/favicon.svg" : "/favicon.svg"
      ),
    },
  ],
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

<style scoped>
h1 {
  background: -webkit-linear-gradient(
    0deg,
    hsl(153deg 47% 53%) 0%,
    hsl(143deg 43% 59%) 7%,
    hsl(130deg 39% 63%) 14%,
    hsl(113deg 38% 65%) 20%,
    hsl(98deg 40% 66%) 26%,
    hsl(86deg 43% 66%) 31%,
    hsl(77deg 46% 66%) 36%,
    hsl(69deg 49% 66%) 40%,
    hsl(63deg 52% 66%) 45%,
    hsl(60deg 48% 66%) 49%,
    hsl(61deg 38% 68%) 53%,
    hsl(63deg 27% 69%) 58%,
    hsl(68deg 16% 70%) 62%,
    hsl(107deg 4% 70%) 66%,
    hsl(220deg 12% 70%) 71%,
    hsl(228deg 24% 70%) 76%,
    hsl(230deg 36% 69%) 82%,
    hsl(231deg 48% 69%) 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
