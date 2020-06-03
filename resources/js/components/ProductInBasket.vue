<template>
    <div class="product">
        <h3>{{product.name}}</h3>
        <br>
        <small>{{product.description}}</small>
        <br>
        <br>
        <b>{{product.price}}€</b>
    </div>
</template>
<script>
    export default {
        props: ['product']
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
