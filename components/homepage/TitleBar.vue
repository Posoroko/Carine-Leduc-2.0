<template>
    <div class="titleBox">
        <h2 class="sectionTitle">{{ title }}</h2>
    </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.titleBox {
    width: var(--main-width);
    padding: 50px;
    margin: auto;
}
.sectionTitle {
    color: var(--text);
    font-family: 'Work Sans';
    font-size: 60px;
    text-align: center;
}
</style>