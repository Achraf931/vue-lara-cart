<template>
    <div class="app">
        <header>
            <router-link :to="{name: 'home'}">Accueil</router-link>
            <router-link :to="{name: 'cart'}">Panier</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    :root {
        --purpleDefault: #591df1;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        outline: none!important;
        font-family: Poppins, Arial, sans-serif;
    }

    html, body {
        font-weight: 200;
        scrollbar-base-color: var(--purpleDefault);
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        width: 5px!important;
        height: 5px!important;
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
        mso-background: var(--purpleDefault);
        background: var(--purpleDefault)!important;
        width: 5px!important;
        height: 5px!important;
        border-radius: 10px;
    }

    ::selection {
        color: white;
        background: var(--purpleDefault);
    }

    button {
        color: white;
        border-radius: 10px;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        background: var(--purpleDefault);
    }

    header {
        margin-bottom: 20px;
        text-align: center;
        padding: 20px;
        border-bottom: 0.5px solid lightgrey;

        a {
            color: #2c3e50;
            background: white;
            border-radius: 10px;
            font-size: 14px;
            font-family: Poppins, Norms, Arial, sans-serif;
            padding: 10px;
            transition: all .2s ease;

            &.router-link-exact-active {
                background: #f0f3ff;
                color: var(--purpleDefault)!important;
            }
        }
    }
</style>
