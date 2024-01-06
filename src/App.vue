<template>
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      app_name: 'My App',
      logo_src: 'https://vuejs.org/images/logo.png'
    }
  }
}
</script>

