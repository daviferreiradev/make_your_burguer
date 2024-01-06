<template>
  <div class="home">
    <Banner />

    <main class="main-container">
      <h2>Monte seu burguer:</h2>
      <BurguerForm />
    </main>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BurguerForm from "../components/BurguerForm.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
    BurguerForm
  },
};

</script>
