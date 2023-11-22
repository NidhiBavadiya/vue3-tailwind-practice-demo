export default {
  purge:['./index.html','./src/**/*.{vue,js}'],
  mode:'jit',
  darkMode:false,
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('../assets/Images/sea.jpeg')",
        'about-img': "url('../assets/Images/pexels-mountine.jpeg')",
      },
      backgroundColor: {
        'primary': '#0C3C60',
        'footer': '#072137',
      }
    },
  },
  variants:{
    extend: {},
  },
  plugins: [],
  corePlugins:{
    // preflight:false
  }
}



