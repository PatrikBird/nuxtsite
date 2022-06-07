<script setup lang="ts">
definePageMeta({
  layout: "blog",
});

const blogNav = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});
</script>

<template>
  <h1>This is where the Blog goes!</h1>

  <div
    class="relative block p-8 my-5 max-w-md	overflow-hidden border border-gray-300 rounded-lg bg-gray-100 dark:bg-dark-800 shadow hover:shadow-lg transition ease-in-out delay-100 duration-300"
  >
    <span class="absolute inset-x-0 bottom-0 h-2 gradient"></span>

    <div class="justify-between sm:flex">
      <div>
        <h5 class="text-xl font-bold">
          Building a SaaS product as a software developer
        </h5>
      </div>
    </div>

    <div class="mt-4 sm:pr-8">
      <p class="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
        provident a, ipsa maiores deleniti consectetur nobis et eaque.
      </p>
    </div>

    <dl class="flex mt-6 justify-between">
      <div class="flex flex-col-reverse">
        <dd class="text-xs text-gray-500">31st June, 2021</dd>
        <dt class="text-sm font-medium text-gray-600">Published</dt>
      </div>

      <div class="flex flex-col-reverse ml-3 sm:ml-6">
        <dd class="text-xs text-gray-500">3 minute</dd>
        <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      </div>
    </dl>
  </div>
</template>

<style scoped>
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
</style>
