<script setup>
defineProps({
  name: String
});
</script>
<template>
  <div class="w-max md:w-[30%] md:min-w-min text-center p-10 2xl:px-32">
    <h2 class="text-4xl font-medium">{{ name }}</h2>
    <p
      class="text-sm leading-6 tracking-wider mt-12"
    >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    <button
      class="p-4 sm:px-10 mt-10 border font-semibold border-blue-950 hover:bg-primary hover:text-white text-blue-950"
    >More Info</button>
  </div>
</template>

<style scoped>
</style>
