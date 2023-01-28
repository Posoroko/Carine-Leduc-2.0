<template>
    <header class="smallHeader">
        <div class="headerTop">
            <img src="/images/headers/prestations.jpg" alt="">
            <h1 class="title">{{ content.title }}</h1>
        </div>
    </header>
    
    <main>
        <p class="introText">{{ content.intro }}</p>


        <p class="paragraph paragraph1">{{ content.paragraph1 }}</p>
        <p class="paragraph paragraph2">{{ content.paragraph2 }}</p>
        <p class="paragraph paragraph3">{{ content.paragraph3 }}</p>
    </main>

    

</template>

<script setup>
const page = useRoute().params.aboutPage
const appConfig = useAppConfig()

// const url = appConfig.directus.items + `aboutPages?fields=title`
const url = appConfig.directus.items + `aboutPages?filter[slug][_eq]=${page}`
console.log(url)



console.log(page)
const { data: content } = await useAsyncData(
    'aboutPageByName',
    async () => {
        const items = await $fetch(url)
        console.log(items.data)
        return items.data[0]
    }
    ,
    { server: true }
)
 


</script>

<style scoped>
.paragraph {
    width: 500px;
    font-size: 18px;
    font-family: var(--main-text-font);
    font-weight: 300;
    color: var(--main-text-color);
    padding: 0 100px;
    margin: 0 auto;
    margin-top: 150px;
}
</style>