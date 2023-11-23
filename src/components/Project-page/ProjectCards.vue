<script setup>
defineProps({
  projectName: String,
  project: String
});
</script>
<template>
  <div class="mt-20">
    <div class="card text-left sm:w-[438px] p-5">
      <img
        class="card-img-top"
        src="../../assets/Images/project-1.webp"
        alt="project"
        v-if="project =='1'"
      />
      <img
        class="card-img-top"
        src="../../assets/Images/project-2.webp"
        alt="project"
        v-if="project =='2'"
      />
      <img
        class="card-img-top"
        src="../../assets/Images/project-3.webp"
        alt="project"
        v-if="project =='3'"
      />
      <img
        class="card-img-top"
        src="../../assets/Images/project-4.webp"
        alt="project"
        v-if="project =='4'"
      />
      <div class="card-body mt-8">
        <h4 class="card-title sm:text-[36px] text-3xl">{{ projectName }}</h4>
        <p
          class="card-text text-base leading-8 tracking-wide mt-10"
        >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>