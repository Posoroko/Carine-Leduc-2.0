<template>
    <!-- This component is 100% width and displays an image in its center. -->

    <div class="box">
        <img :src="`${imageLink}`" alt="">
    </div>

</template>

<script setup>

const props = defineProps(['imageLink', 'height'])

</script>

<style scoped>
.box {
    width: 100%;
    display: grid;
    place-items: center;
}
.box img {
    /* height: v-bind(height); */
    height: 25vh;
}

</style>