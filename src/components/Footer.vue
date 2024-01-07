<template>
    <footer>
        <div class="footer-content">
            <p>Desenvolvido por Davi Ferreira | Make Your Burger &copy; 2024</p>
            <p>
                <a href="https://github.com/daviferreiradev" target="_blank">GitHub</a> |
                <a href="https://www.linkedin.com/in/daviferreiradev/" target="_blank">LinkedIn</a>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 128px;
        background-color: #111;
        font-size: 14px;
        line-height: 2px;
        color: #fff;
    }

    a {
        text-decoration: underline;
        color: #fff;
    }
</style>