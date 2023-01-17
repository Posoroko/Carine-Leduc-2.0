<template>
    <header>
        <img src="/images/headers/carine.jpg" alt="">

        <div class="titleBox">
            <h1>Carine Leduc</h1>
            <h2>Thérapeute énergéticienne</h2>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>

header {
    width: 100%;
    height: 75vh;
    background-color: rgb(50, 50, 50);
    position: relative;
    overflow: hidden;
}
header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}
.titleBox {
    position: absolute;
    left: 15%;
    bottom: 0%;
}
.titleBox h1 {
    font-size: 9vw;
    font-family: var(--calligraphy);
    color: rgb(202, 151, 40);

}
</style>