<script setup>
</script>
<template>
  <div class="bg-primary flex justify-center py-20">
    <div class="text-center w-1/2">
      <h2 class="text-white text-4xl">CONTACT</h2>
      <div class="sm:flex text-left mt-8">
        <div class="flex flex-col m-3 sm:w-1/2 w-full">
          <label class="text-white text-xl" for="first-name">First Name</label>
          <input
            type="text"
            name
            id="first-name"
            class="bg-transparent border-b-2 border-b-white py-3 focus-visible:outline-none text-white"
          />
        </div>
        <div class="flex flex-col m-3 sm:w-1/2 w-full">
          <label class="text-white text-xl" for="last-name">Last Name</label>
          <input
            type="text"
            name
            id="last-name"
            class="bg-transparent border-b-2 border-b-white py-3 focus-visible:outline-none text-white"
          />
        </div>
      </div>
      <div class="sm:flex text-left">
        <div class="flex flex-col m-3 sm:w-1/2 w-full">
          <label class="text-white text-xl" for="email">Email</label>
          <input
            type="text"
            name
            id="email"
            class="bg-transparent border-b-2 border-b-white py-3 focus-visible:outline-none text-white"
          />
        </div>
        <div class="flex flex-col m-3 sm:w-1/2 w-full">
          <label class="text-white text-xl" for="subject">Subject</label>
          <input
            type="text"
            name
            id="subject"
            class="bg-transparent border-b-2 border-b-white py-3 focus-visible:outline-none text-white"
          />
        </div>
      </div>
      <div class="sm:flex items-end text-left">
        <div class="flex flex-col m-3 text-left sm:w-3/4 w-full">
          <label class="text-white text-xl" for="message">Message</label>
          <textarea
            id="message"
            class="bg-transparent border-b-2 border-b-white py-3 min-h-14 focus-visible:outline-none text-white"
          />
        </div>
        <button
          class="sm:w-1/4 m-3 px-8 sm:p-1 border-2 border-white bg-white text-blue-950 text-normal font-semibold hover:text-white max-h-14 h-14 hover:bg-primary"
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>