<template>
    <div class="backHomeBar">
        <NuxtLink class=" linkBack" to="/blog"><span class="icon">arrow_back</span> <span>retour à la page d'accueil du blog</span></NuxtLink>
    </div>
    <main class="blogHeader">
        <h2 class="title">{{ blog.title }}</h2>
        <h3 class="subtitle"> {{ blog.subtitle }}</h3>
        <p v-if="blog" :v-html="blog.content"></p>
    </main>

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
.backHomeBar {
    display: flex;
    padding: 5px;
}
.linkBack {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: var(--blog-color);
    color: white;
    border-radius: 5px;
}
.linkBack:hover {
    background-color: var(--blog-color-hover);
    box-shadow: var(--shadow);
}
.backHomeBar .icon {
    font-size: 30px;
    margin-right: 10px;
}
.backHomeBar span {
    font-size: 20px;
}
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