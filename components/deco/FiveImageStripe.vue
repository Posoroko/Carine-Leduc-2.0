<template>
    <section class="stripe r">
        <div class="frame" v-for="image in images" :key="image.id">
            <img :src="`https://ku3vu7zb.directus.app/assets/${image.src}.jpg`" :alt="image.alt" />
        </div>
    </section>
</template>

<script setup>

const props = defineProps({
    images: Array
})
    
</script>

<style scoped>
.stripe {
    width: 100%;
    height: 40vh;
}
</style>