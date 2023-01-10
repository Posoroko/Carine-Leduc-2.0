<template>
    <header class="blogHeader">
        <h1>ÉNERGIE DE VIE</h1>
        <h2>ARTICLES DE SAISON ET LECTURE BIENÊTRE</h2>
        <div class="catBox">
            <p>santé</p>
            <p>saison</p>
            <p>divers</p>
        </div>
    </header>

</template>

<script setup>



</script>

<style scoped>

.blogHeader h1{
    font-size: 80px;
    font-weight: 700;
    padding-top: 20px;
    display: grid;
    place-items: center;
}

.blogHeader h2{
    font-size: 25px;
    font-weight: 400;
    padding-bottom: 20px;
    display: grid;
    place-items: center;
}
.catBox {
    font-size: 20px;
    font-weight: 700;
    padding: 13px;
    border-top: 1px solid var(--blog-color);
    border-bottom: 2px solid var(--blog-color);
    display: flex;
    justify-content: space-around;
}

</style>