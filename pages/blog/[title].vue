<template>
    <header class="blogHeader">
        <h1 class="title">{{ blog.title }}</h1>
        <h2 class="subtitle"> {{ blog.subtitle }}</h2>
        <p v-if="blog" :v-html="blog.content"></p>
    </header>

</template>

<script setup>

definePageMeta({
  layout: "blog",
});

const appConfig = useAppConfig()

const blogTitle = useRoute().params.title

const blogUrl = appConfig.directus.items + `Blogs?filter[title][_eq]=${blogTitle}`

const blogFetchOptions = {
    server: true
}

const { data: blog } = await useAsyncData(
    `${blogTitle}`, 
    async () => {
        const item = await $fetch(blogUrl, blogFetchOptions)
        console.log(item)
        return item.data[0]
    } 
    ,
    { server: true } 
)   
  
  
</script>

<style scoped>
.blogHeader .title {
    font-size: 80px;
    font-family: var(--blog-text-font);
    padding: 30px 0 0px 0;
    border-bottom: 2px solid var(--blog-color);
}
.blogHeader .subtitle {
    font-size: 40px;
    font-family: var(--blog-text-font);
    padding: 10px 0;
}
</style>