<template>
    <div class="cart">
        <Product v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Product from "../components/Product";

    export default {
        name: 'home',
        components: {
            Product
        },
        computed: {
            ...mapGetters({
                products: 'products/products'
            })
        },
        beforeMount() {
            this.$store.dispatch('products/getProducts')
        }
    }
</script>
<style lang="scss" scoped>
    .cart {
        display: grid;
        grid-gap: 46px;
        width: 100%;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, 300px);
    }
</style>
