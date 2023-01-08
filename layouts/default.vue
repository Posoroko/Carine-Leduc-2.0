<template>
    <TopBar />
    <div>
        <slot />
    </div>

    <Footer />
</template>

<script setup>
import { initialQueryTrigger } from '@/stores/queryManager'

//trigger queries ti DB depending on first page being visited
//will need to be more specific about the exact path
initialQueryTrigger(useRoute().fullPath)


</script>

<style>
    /* imports of all css files */
    /* @import '@/assets/css/reset.css';
    @import '@/assets/css/variables.css'; */
</style>