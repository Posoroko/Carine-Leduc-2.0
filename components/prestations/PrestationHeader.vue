<template>
    <header class="">
        <img :src="imageUrl" alt="">
        <h1 class="title">{{ title }}</h1>
    </header>
</template>

<script setup>

const props = defineProps(['title', 'imageUrl'])

</script>

<style scoped>
header {
    height: 75vh;
    overflow: hidden;
    position: relative;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.4;
}
.title {
    font-size: 100px;
    font-family: var(--english);
    color: var(--main-contrast);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    
}
</style>