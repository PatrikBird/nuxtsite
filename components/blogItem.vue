<script setup lang="ts">
const props = defineProps<{
  link: string;
  title: string;
  description: string;
  publishedOn: string;
  readingTimeEst: string;
}>();
</script>

<template>
  <a
    class="relative block pt-3 px-8 mb-5 max-w-md overflow-hidden border border-gray-100 rounded-lg hover:bg-gray-100"
    transition="ease-in-out delay-100 duration-300"
    shadow="sm hover:lg"
    href="{{ link }}"
  >
    <div class="justify-between sm:flex">
      <div>
        <h5 class="text-lg font-bold mb-0 mt-3">
          {{ title }}
        </h5>
      </div>
    </div>
    <div class="sm:pr-8">
      <p class="text-sm text-gray-500">
        {{ description }}
      </p>
    </div>
    <dl class="flex mt-0">
      <div class="flex flex-col-reverse">
        <dd class="text-xs text-gray-500">{{ publishedOn }}</dd>
        <dt class="text-sm font-medium text-gray-600">Published</dt>
      </div>
      <div class="flex flex-col-reverse ml-3 sm:ml-6">
        <dd class="text-xs text-gray-500">{{ readingTimeEst }}</dd>
        <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      </div>
    </dl>
  </a>
</template>
