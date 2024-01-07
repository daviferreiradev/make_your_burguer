<template>
  <!-- Soli Deo Gloria -->
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
      logo_src: '/img/burger-logo.png'
    }
  }
}
</script>

<style>
  body {
    font-family: Helvetica;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    margin: 0 0 32px 0;
    color: #222;
  }

  .main-container {
    padding: 4% 0;
  }
</style>
