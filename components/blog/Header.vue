<template>
    <header class="blogHeader">
        <h1>{{  blogConfig.title }}</h1>
        <h2>{{ blogConfig.subtitle }}</h2>
        <div class="catBox">
            <p>santé</p>
            <p>saison</p>
            <p>divers</p>
        </div>
    </header>

</template>

<script setup>
const appConfig = useAppConfig()
const blogConfigUrl = appConfig.directus.items + "BlogConfig"
const blogConfigFetchOptions = {
    server: true,
    // params: {
    //     fields: 'title, content, date_published, mainImage.image, mainImage.alt'
    // }
}

const { data: blogConfig } = await useAsyncData(
    'blogConfig',
    async () => {
        const items = await $fetch(blogConfigUrl, blogConfigFetchOptions)
        return items.data
    }
    ,
    { server: true }
)

</script>

<style scoped>
.blogHeader h1{
    font-size: clamp(32px, 5vw, 80px);
    font-family: var(--blog-text-font);
    /* font-family: 'Roboto'; */
    font-weight: 800;
    text-align: center;
    padding-top: 20px;
    display: grid;
    place-items: center;
}

.blogHeader h2{
    font-size: clamp(16px, 2vw, 25px);
    font-family: var(--blog-text-font);
    font-weight: 400;
    text-align: center;
    padding-bottom: 20px;
    display: grid;
    place-items: center;
}
.catBox {
    font-size: clamp(16px, 2vw, 25px);
    font-weight: 700;
    padding: 13px;
    border-top-color: var(--blog-color);
    border-top-width: var(--blog-border-thin);
    border-top-style: solid;

    border-bottom-color: var(--blog-color);
    border-bottom-width: var(--blog-border-thick);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-around;
}
</style>