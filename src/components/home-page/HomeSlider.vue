<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<template>
  <div class="p-8 md:py-28 bg-gray-100">
    <div class="flex justify-center">
      <h2 class="text-4xl font-medium text-primary">TESTIMONIALS</h2>
    </div>
    <div class="pt-24">
      <carousel :items-to-show="1">
        <slide v-for="slide in 3" :key="slide" class="flex-col">
          <p class="text-primary text-lg font-light">
            “I'm a testimonial. Click to edit me and add text that
            <br />says something nice about you and your services.”
          </p>
          <div class="mt-16">
            <h4 class="text-[#0C3C60] text-sm font-bold">Marketing Director</h4>
            <p class>Brad Stevens</p>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<style scoped></style>