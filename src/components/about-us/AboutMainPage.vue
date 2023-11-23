<script setup>
import HomeNavbar from "../elements/HomeNavbar.vue";
import ContactForm from "../elements/ContactForm.vue";
import HomeFooter from "../elements/HomeFooter.vue";
import AboutTeamCard from "../about-us/AboutTeamCard.vue";
</script>

<template>
  <div>
    <!-- navbar -->
    <div>
      <home-navbar />
    </div>
    <div class="my-16 container mx-auto">
      <h1 class="text-center text-4xl sm:text-6xl text-primary font-normal">ABOUT</h1>
      <!-- about intro -->
      <div class="block md:flex justify-between mt-12">
        <div class="p-10 md:w-1/2 my-auto xl:px-32">
          <p class="leading-8 tracking-wide">
            I'm a paragraph. Click here to add your own text and
            edit me. It’s easy. Just click “Edit Text” or double click
            me to add your own content and make changes to the
            font. Feel free to drag and drop me anywhere you like
            on your page. I’m a great place for you to tell a story
            and let your users know a little more about you.
          </p>​
          <p class="leading-8 tracking-wide">
            This is a great space to write a long text about your
            company and your services. You can use this space to
            go into a little more detail about your company. Talk
            about your team and what services you provide. Tell
            your visitors the story of how you came up with the
            idea for your business and what makes you different
            from your competitors. Make your company stand out
            and show your visitors who you are.
          </p>
        </div>
        <div class>
          <img src="../../assets/Images/about-meeting-img.webp" alt="meeting" />
        </div>
      </div>
      <!-- team card -->
      <div class="my-32">
        <h2 class="text-center text-4xl text-primary font-normal">OUR TEAM</h2>
        <p class="text-center">
          I'm a paragraph. Click here to add your
          <br />own text and edit me.
        </p>
        <div class="block md:flex flex-wrap justify-around">
          <about-team-card name="DOMINICK JAMES" position="Founder and Principal" type="1" />
          <about-team-card name="GRACE RIOS" position="Project Manager" type="2" />
        </div>
        <div class="block md:flex flex-wrap justify-around">
          <about-team-card name="KIM BAILEY" position="VP Marketing" type="3" />
          <about-team-card name="TREVOR SINCLAIR" position="VP Accounts" type="4" />
        </div>
      </div>
    </div>
    <!-- contact form -->
    <div>
      <contact-form />
      <home-footer />
    </div>
  </div>
</template>

<style scoped>
</style>