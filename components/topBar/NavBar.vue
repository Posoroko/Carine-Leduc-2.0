<template>
    <div class="box">
        <p class="tab work" v-for='tab in tabs' :key="tab.name">
            <NuxtLink :to="tab.link"> {{ tab.name }} </NuxtLink>
        </p>
    </div>

</template>

<script setup>

const props = defineProps(['tabs'])

</script>

<style scoped>
.box {
    color: var(--text);
    font-size: 18px;
    display: flex;
    justify-content: center;
    gap: 50px;
}
.tab{
    font-size: 24px;
    padding: 5px 0;
    display: inline-block;
}
</style>