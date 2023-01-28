<template>
    <div class="titleBox">
        <h2 class="sectionTitle">
            <NuxtLink class="link" :to="link"> {{ title }} </NuxtLink>
        </h2>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'link'])


</script>

<style scoped>
.titleBox {
    width: 100%;
    padding: 0 0 20px 0;
    margin: auto;
}
.sectionTitle {
    color: var(--text);
    font-family: 'Work Sans';
    font-weight: 300;
    font-size: clamp(30px, 3vw, 50px);
    text-align: center;
    
}

.sectionTitle h2 .link{
    cursor: pointer;
}
</style>