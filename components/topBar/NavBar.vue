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
    display: flex;
    justify-content: center;
    gap: 40px;
}
.tab{
    color: var(--text);
    font-family: var(--main-text);
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