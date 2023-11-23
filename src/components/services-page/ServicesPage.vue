<script setup>
import HomeNavbar from "../elements/HomeNavbar.vue";
import ContactForm from "../elements/ContactForm.vue";
import HomeFooter from "../elements/HomeFooter.vue";
import ServiceCard from "../services-page/ServiceCard.vue";
</script>
<template>
  <div>
    <home-navbar />
    <div class="my-16 container mx-auto">
      <h1 class="text-center text-4xl sm:text-6xl text-primary font-normal">SERVICES</h1>
      <div class="flex justify-center flex-col items-center mt-14">
        <service-card serviceName="PROJECT MANAGEMENT" price="$220" service="1" />
        <service-card serviceName="OPERATIONAL CONSULTING" price="$150" service="2" />
        <service-card serviceName="CORPORATE STRATEGY" price="$170" service="3" />
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