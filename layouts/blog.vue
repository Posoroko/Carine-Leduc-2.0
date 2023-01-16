<template>
    <div class="blogBody">
        <div class="blogPage">
            <TopBar :isBlog="true" />

            <blogTopDate />

            <slot />

        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.blogBody {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    padding-top: 10px;
}
.blogPage {
    width: var(--blog-page-width);
    padding: 5px;
    margin: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.219);
}
</style>