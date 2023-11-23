<script setup>
defineProps({
  serviceName: String,
  price: String,
  service: String
});
</script>
<template>
  <div class="block lg:flex border border-black lg:w-[940px] m-4">
    <div>
      <img src="../../assets/Images/service-1.webp" alt="service" v-if="service =='1'" />
      <img src="../../assets/Images/service-2.webp" alt="service" v-if="service =='2'" />
      <img src="../../assets/Images/service-3.webp" alt="service" v-if="service =='3'" />
    </div>
    <div class="flex flex-col p-5 sm:p-12">
      <h2 class="text-2xl font-normal mb-4">{{ serviceName }}</h2>
      <span class="text-base mb-3">1 hr</span>
      <span class="text-base">{{ price }}</span>
      <button
        class="w-max p-4 mt-5 border font-semibold border-blue-950 hover:bg-primary hover:text-white text-blue-950"
      >Book Now</button>
    </div>
  </div>
</template>
<script scoped>
</script>