<template>
    <header>
        <h1>{{ blog.title }}</h1>
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
</style>