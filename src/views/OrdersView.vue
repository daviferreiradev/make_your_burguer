<template>
  <div>
    <h1>Gerenciar pedidos:</h1>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "OrdersView",
  components: {
    Dashboard
  }
}
</script>
