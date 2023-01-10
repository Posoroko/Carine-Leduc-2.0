<template>
    <div class="dateBox">
        <span>{{ date }}</span>
    </div>

</template>

<script setup>
import { createDateString } from '@/composables/dataManipulation'

const date = ref(createDateString(new Date()))


</script>

<style scoped>
.dateBox {
    padding-top: 50px;
    border-bottom: 2px solid var(--blog-text-color);
    padding-bottom: 5px;
}
.dateBox span {
    font-size: 18px;
    font-family: var(--blog-text-font);
    font-weight: 600;
    color: var(--blog-text-color);   
}
</style>