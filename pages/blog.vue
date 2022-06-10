<script setup lang="ts">
definePageMeta({
  layout: "blog",
});

const { data } = await useAsyncData("blogContent", () => queryContent("blog").find());

// get todays date in the format 20th of July 2020
const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const todayDate = `${dd}/${mm}/${yyyy}`;
</script>

<template>
  <div>
    <h1>Blog</h1>
    <blog-item
      v-for="(item, index) in data"
      :key="`blogItem-${item}-${index}`"
      :link="item._path"
      :title="item.head.title"
      :description="item.description"
      :published-on="todayDate"
      reading-time-est="2 seconds"
    ></blog-item>
  </div>
</template>

<!-- <style scoped lang="scss">
 .gradient {
  background-image: linear-gradient(
    50deg,
    hsl(153deg 47% 53%) 0%,
    hsl(144deg 44% 58%) 15%,
    hsl(133deg 40% 62%) 21%,
    hsl(117deg 38% 66%) 27%,
    hsl(102deg 41% 66%) 31%,
    hsl(90deg 44% 66%) 36%,
    hsl(80deg 46% 66%) 40%,
    hsl(71deg 49% 66%) 44%,
    hsl(63deg 52% 66%) 48%,
    hsl(59deg 49% 66%) 52%,
    hsl(58deg 39% 67%) 56%,
    hsl(56deg 29% 68%) 60%,
    hsl(52deg 18% 69%) 64%,
    hsl(39deg 6% 69%) 68%,
    hsl(247deg 8% 69%) 73%,
    hsl(238deg 21% 70%) 79%,
    hsl(234deg 34% 69%) 85%,
    hsl(231deg 48% 69%) 100%
  );
} 
</style> -->
