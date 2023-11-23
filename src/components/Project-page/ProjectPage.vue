<script setup>
import HomeNavbar from "../elements/HomeNavbar.vue";
import ContactForm from "../elements/ContactForm.vue";
import HomeFooter from "../elements/HomeFooter.vue";
import ProjectCards from "../project-page/ProjectCards.vue";
</script>
<template>
  <div>
    <home-navbar />
    <div class="my-16 container mx-auto">
      <h1 class="text-center text-4xl sm:text-6xl text-primary font-normal">PROJECTS</h1>
      <div class="block md:flex flex-wrap justify-around">
        <project-cards projectName="Project  1" project="1" />
        <project-cards projectName="Project  2" project="2" />
      </div>
      <div class="block md:flex flex-wrap justify-around mt-16">
        <project-cards projectName="Project  3" project="3" />
        <project-cards projectName="Project  4" project="4" />
      </div>
    </div>
    <!-- contact form -->
    <div>
      <contact-form />
      <home-footer />
    </div>
  </div>
</template>
<script scoped>
</script>