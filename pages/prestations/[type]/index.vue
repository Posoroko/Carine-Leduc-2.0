<template>
    <header class="smallHeader">
        <div class="headerTop">
            <img :src="`/images/headers/${prestaType}.jpg`" alt="">
            <h1>{{ presta.name }}</h1>
        </div>
    </header>

    <main class="prestaBoard">
        <div class="background"></div>

        <div class="prestaPanelBox" >
            <PrestaPanel  :presta="presta" :listsOn="true"/>
        </div>        
    </main>
</template>

<script setup>
import PrestaPanel from '@/components/prestations/PrestaPanel'

const prestaType = useRoute().params.type

console.log(prestaType)

const appConfig = useAppConfig()

const url = appConfig.directus.items + `Prestations?filter[id][_eq]=${prestaType}`

const fetchOptions = {
    server: true,
}

const { data: presta } = await useAsyncData(
    'prestaByType', 
    async () => {
        const items = await $fetch(url, fetchOptions)
        return items.data[0]
    }
    ,
    { server: true }
)

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