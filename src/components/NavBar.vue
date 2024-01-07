<template>
    <nav>
        <router-link id="logo-url" to="/">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Início</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ["logo", "alt"]
}
</script>

<style scoped>
    nav {
        background-color: #111;
        padding: 16px 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 40px;
        height: 40px;
    }

    nav a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        margin-left: 40px;
        transition: .5s;
    }

    nav a:hover {
        color: #BFBFBF;
    }
</style>


