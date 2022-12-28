<template>
    <div class="box">
        <p class="tab work" v-for='tab in tabs' :key="tab.name">
            <NuxtLink :to="tab.link"> 
                {{ tab.name }} 
                <div class="line"></div>
            </NuxtLink>
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
    gap: 40px;
}
.tab{
    font-size: 24px;
    padding: 5px 0;
    display: inline-block;
    position: relative;
}
.line {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}
.tab:hover .line {
    border-bottom: 1px solid gray;
}
</style>