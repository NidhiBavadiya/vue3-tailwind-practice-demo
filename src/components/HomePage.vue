<script setup>
import HomeNavbar from "./home-page/HomeNavbar.vue";
import ServiceInfoCard from "./home-page/ServiceInfoCard.vue";
import ContactForm from "./home-page/ContactForm.vue";
import HomeFooter from "./home-page/HomeFooter.vue";
import HomeSlider from "./home-page/HomeSlider.vue";
</script>
<template>
  <div>
    <!-- navbar -->
    <home-navbar />
    <!-- maun image card -->
    <div class="bg-header-img bg-cover flex justify-center items-end h-[600px] bg-no-repeat">
      <div class="bg-white w-[95%] md:w-max text-center h-max p-5 md:p-14">
        <p class="text-base font-normal sm:text-2xl text-blue-950">Developing Innovative Strategies</p>
        <h2 class="text-2xl font-medium sm:text-5xl text-blue-950 mt-5">ACHIEVING GROWTH</h2>
        <button
          class="p-4 mt-10 border font-semibold border-blue-950 hover:bg-primary hover:text-white text-blue-950"
        >Book A Consultation</button>
      </div>
    </div>
    <!-- cards -->
    <div class="flex m-3 justify-center flex-wrap mt-20">
      <service-info-card name="SERVICES" />
      <service-info-card name="PROJECTS" />
      <service-info-card name="CLIENTS" />
    </div>

    <!-- about us (bg-blue-200 bg-gradient-to-t from-blue-300 via-blue-200 to-blue-100) -->
    <div class="bg-about-img bg-cover flex justify-center items-center bg-no-repeat">
      <div class="xl:w-[35%] md:w-[50%] w-full px-10 py-32 text-center">
        <h2>ABOUT US</h2>
        <p
          class="mt-5 p-4 text-sm leading-6 tracking-wider"
        >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p
          class="mt-5 p-4 text-sm leading-6 tracking-wider"
        >This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
        <button
          class="p-4 mt-10 border font-semibold border-blue-950 hover:bg-primary hover:text-white text-blue-950"
        >Learn More</button>
      </div>
    </div>
    <!-- slider -->
    <div>
      <home-slider />
    </div>
    <!-- contact form -->
    <div>
        <ContactForm />
    </div>
    <!-- footer -->
    <div>
      <home-footer />
    </div>

  </div>
</template>

<style scoped>
</style>
