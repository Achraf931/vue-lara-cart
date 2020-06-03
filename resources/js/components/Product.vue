<template>
    <div class="product">
        <h3>{{product.name}}</h3>
        <br>
        <small>{{product.description}}</small>
        <br>
        <br>
        <b>{{product.price}}€</b>
        <button @click.prevent="addToBasket">Ajouter au panier</button>
    </div>
</template>
<script>
    export default {
        props: ['product'],
        methods: {
            addToBasket() {
                this.$store.dispatch('basket/AddProductToBasket', {product_id: this.product.id, quantity: 1})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .product {
        padding: 15px;
        box-shadow: 0 0 13px 0 rgba(82,63,105,.05);

        button {
            float: right;
        }
    }
</style>
