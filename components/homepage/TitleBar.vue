<template>
    <div class="titleBox">
        <h2 class="sectionTitle">
            <NuxtLink :to="link"> {{ title }} </NuxtLink>
        </h2>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'link'])


</script>

<style scoped>
.titleBox {
    width: var(--main-width);
    padding: 0 0 20px 0;
    margin: auto;

}
.sectionTitle {
    color: var(--text);
    font-family: 'Work Sans';
    font-size: 60px;
    text-align: center;
    cursor: pointer;
}
</style>