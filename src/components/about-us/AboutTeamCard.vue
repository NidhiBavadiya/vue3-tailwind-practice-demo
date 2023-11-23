<script setup>
defineProps({
  name: String,
  position: String,
  type: String
});
</script>
<template>
  <div class="mt-20">
    <div class="card text-left sm:w-[360px] p-5">
      <img class="card-img-top" src="../../assets/Images/team-1.webp" alt="team" v-if="type=='1'" />
      <img class="card-img-top" src="../../assets/Images/team-2.webp" alt="team" v-if="type=='2'" />
      <img class="card-img-top" src="../../assets/Images/team-3.webp" alt="team" v-if="type=='3'" />
      <img class="card-img-top" src="../../assets/Images/team-4.webp" alt="team" v-if="type=='4'" />
      <div class="card-body mt-8">
        <h4 class="card-title text-[26px]">{{ name }}</h4>
        <span class="text-[16px] font-medium text-primary">{{ position }}</span>
        <p
          class="card-text text-base leading-8 tracking-wide mt-10"
        >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>