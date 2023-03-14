<template>
    <header class="smallHeader">
        <div class="headerTop">
            <img :src="`/images/headers/${prestaType}.jpg`" alt="">
            <h1 class="animatedTitle">{{ activePresta.name }}</h1> 
        </div>
    </header>

    <main class="prestaBoard">
        <div class="background"></div>

        <div class="prestaPanelBox" >
            <PrestaPanel  :presta="activePresta" :listsOn="true"/>
        </div>        
    </main>
</template>

<script setup>
import PrestaPanel from '@/components/prestations/PrestaPanel'

const prestaType = useRoute().params.type

const appConfig = useAppConfig()

const url = appConfig.directus.items + `Prestations?filter[idName][_eq]=${prestaType}`

const fetchOptionsActivePresta = {
    server: true,
}

const { data: activePresta } = await useAsyncData(
    'prestaByType', 
    async () => {
        const items = await $fetch(url, fetchOptionsActivePresta)  
        console.log(items.data.length) 
        return items.data[0]
    }
    ,
    { server: true }
)


// const urlPrestations = appConfig.directus.items + `${prestaType}`
// const fetchOptionsPrestations = {
//     server: true,
// }

// const { data: prestations } = await useAsyncData(
//     'prestaByType',
//     async () => {
//         const items = await $fetch(urlPrestations, fetchOptionsPrestations)
//         console.log(items.data[0])
//         return items.data[0]
//     }
//     ,
//     { server: true }
// )


</script>




<style scoped>
.introText {
    font-size: 18px;
    font-family: var(--main-text);
    font-weight: 300;
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: var(--text);
    padding: 20px;
    border-top: 1px solid var(--main-contrast);
    border-bottom: 1px solid var(--main-contrast);
}

.prestaBoard {
    width: var(--mid-width);
    border-radius: 20px;
    padding: clamp(5px, 2vw, 30px);
    margin: 50px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    position: relative;
}

.prestaBoard .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/images/deco/motif-feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}
</style>