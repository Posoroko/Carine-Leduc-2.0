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
    font-size: clamp(32px, 5vw, 80px);
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
    display: grid;
    place-items: center;
}

.blogHeader h2{
    font-size: clamp(16px, 2vw, 25px);
    font-weight: 400;
    text-align: center;
    padding-bottom: 20px;
    display: grid;
    place-items: center;
}
.catBox {
    font-size: clamp(16px, 2vw, 25px);
    font-weight: 700;
    padding: 13px;
    border-top-color: var(--blog-color);
    border-top-width: var(--blog-border-thin);
    border-top-style: solid;

    border-bottom-color: var(--blog-color);
    border-bottom-width: var(--blog-border-thick);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-around;
}

</style>