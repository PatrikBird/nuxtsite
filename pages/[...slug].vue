<script setup lang="ts">
definePageMeta({
  layout: "post",
});
</script>

<template>
  <main>
    <ContentDoc>
      <template #not-found> 404 - Article not found </template>
    </ContentDoc>
  </main>
</template>
