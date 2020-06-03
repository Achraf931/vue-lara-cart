<template>
    <div class="cart">
        <section>
            <ProductInBasket v-for="product in basket" :key="product.id" :product="product"/>
        </section>
        <section></section>

        <p>{{totalPrice}}</p>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import ProductInBasket from "../components/ProductInBasket";

    export default {
        name: 'cart',
        components: {
            ProductInBasket
        },
        computed: {
            ...mapGetters({
                basket: 'basket/basket',
                basketItemCount: 'basket/basketItemCount',
                totalPrice: 'basket/basketTotalPrice'
            })
        },
        beforeMount() {
            this.$store.dispatch('basket/getBasket')
        }
    }
</script>
