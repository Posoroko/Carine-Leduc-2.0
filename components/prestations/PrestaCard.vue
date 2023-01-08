<template>
    <div class="card">
        <!-- <img :src="image" alt=""> -->
    </div>

</template>

<script setup>

const props = defineProps(['image'])

</script>

<style scoped>
.card {
    width: 100px;
    aspect-ratio: 2/3;
    background-color: var(--main-bg);
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
}
</style>