<template lang="">
    <footer>
        <Logo/>
        <a href="https://github.com/shineuiseong"
            target="_blank">
            (c){{ getDate }} Stack_Shines
        </a>
    </footer>
</template>
<script>
import Logo from '~/components/Logo'
export default {
    components: {
        Logo,
    },
    computed: {
        getDate() {
            return new Date().getFullYear()
        }
    },
}
</script>
<style lang="scss" scoped>
footer{
    padding: 70px 0;
    text-align: center;
    opacity: .3;
    .logo{
        display: block;
        margin-bottom: 4px;
    }
}

</style>