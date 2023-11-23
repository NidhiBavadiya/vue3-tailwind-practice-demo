<script setup>
import ContactTwitterIcon from "../svg-icon/ConatctTwitterIcon.vue";
import ContactFacebookIcon from "../svg-icon/ContactFacebookIcon.vue";
</script>

<template>
  <div class="bg-footer md:flex text-center md:text-left justify-around py-12">
    <div class="my-8">
      <label class="text-white text-xl">JAMES CONSULTING</label>
      <p class="text-white leading-6 tracking-wider pt-5">
        500 Terry Francine Street,
        <br />San Francisco, CA 94158
        <br />Mail:
        <a href="mailto:info@mysite.com">info@mysite.com</a>
        <br />Tel:
        <a href="tel:+123-456-7890">123-456-7890</a>
      </p>
    </div>
    <div class="my-8">
      <label class="text-white text-xl">MENU</label>
      <ul class="text-white leading-6 tracking-wider pt-5">
        <li class="py-1 hover:text-blue-300">About</li>
        <li class="py-1 hover:text-blue-300">Projects</li>
        <li class="py-1 hover:text-blue-300">Services</li>
        <li class="py-1 hover:text-blue-300">Plans & Pricing</li>
        <li class="py-1 hover:text-blue-300">Tools & Tips</li>
        <li class="py-1 hover:text-blue-300">Contact</li>
      </ul>
    </div>
    <div class="my-8">
      <label class="text-white text-xl">SOCIALS</label>
      <div class="pt-5 flex justify-center md:justify-start">
        <contact-facebook-icon class="mr-2" />
        <contact-twitter-icon />
      </div>
      <p class="text-white leading-6 tracking-wider pt-5">
        © 2035 by JAMES CONSULTING.
        <br />Powered and secured by Wix
      </p>
    </div>
  </div>
</template>

<script scoped>
</script>