<template>
    <div class="box">
            <NuxtLink class="tab" v-for='tab in tabs' :key="tab.name" :to="tab.link"> 
                {{ tab.name }} 
                <div class="line"></div>
            </NuxtLink>
    </div>

</template>

<script setup>
const props = defineProps(['tabs'])

</script>

<style scoped>
.box {
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid var(--panel-border);
    display: flex;
    justify-content: center;
    gap: 40px;
}
.tab{
    color: var(--text);
    font-weight: 300;
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

</style>