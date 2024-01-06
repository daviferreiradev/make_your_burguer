<template>
    <nav>
        <router-link to="/">
            <img :src="logo" :alt="alt" id="logo" width="8%">
        </router-link> |
        <router-link to="/">Início</router-link> |
        <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ["logo", "alt"]
}
</script>


