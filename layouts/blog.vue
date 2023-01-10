<template>
    <div class="blogBody">
        <div class="blogWidth">
            <TopBar :isBlog="true" />

            <blogTopDate />
        </div>
        
        <slot />

    </div>
</template>

<script setup>
import { initialQueryTrigger } from '@/stores/queryManager'

//trigger queries ti DB depending on first page being visited
//will need to be more specific about the exact path
initialQueryTrigger(useRoute().fullPath)


</script>

<style scoped>
.blogBody {
    width: 100%;
    min-height: 100vh;
    background-color: white;
}
.blogWidth {
    width: min(1200px, 98%);
    margin: auto;
}
</style>