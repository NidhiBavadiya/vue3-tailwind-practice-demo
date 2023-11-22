<script setup>
 
   open = false
 
  function toggle(){
    console.log("object1", this.open)
    	this.open = !this.open
        console.log("object2")
    }
</script>

<template>
  <main>
    <div class="bg-primary">
        <nav class="flex items-center justify-between flex-wrap bg-teal p-6 ">
            <!-- logo -->
            <div>
                <p class="text-white text-xl">JAMES CONSULTING</p>
            </div>
            <div>
            <div class="block md:hidden">
            <button @click="toggle()" >
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow md:flex md:items-center md:w-auto">
            <div class="text-md md:flex-grow" >
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100 mr-4">          
                    About
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100 mr-4">
                    Projects
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100 mr-4">
                    Services
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100 mr-4">
                    Plans & Pricing
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100 mr-4">
                    Tools & Tips
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-100">
                    Contact
                </a>
            </div>
            </div>
            </div>
        </nav>
    </div>
  </main>
</template>