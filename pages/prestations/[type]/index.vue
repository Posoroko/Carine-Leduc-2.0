<template>
    <header>
        <div class="headerTop">
            <h1>{{ eric }}</h1>
            <img src="/images/deco/chemin-foret.jpg" alt="">
        </div>
        
    </header>

    <main class="prestaBoard">
        <div class="background"></div>

        <div class="prestaPanelBox" >
            <PrestaPanel  :presta="presta.data[0]" :listsOn="true"/>
        </div>        
    </main>
</template>

<script setup>
import PrestaPanel from '@/components/prestations/PrestaPanel'

const prestaType = useRoute().params.type

console.log(prestaType)

const appConfig = useAppConfig()

const url = appConfig.directus.items + `Prestations?filter[name][_eq]=${prestaType}`

const fetchOptions = {
    server: true,
}

const { data: presta } = await useAsyncData(
    'prestaByType', 
    async () => {
        const items = await $fetch(url, fetchOptions)
        return items
    }
    ,
    { server: true }
)

</script>




<style scoped>
header {
    width: 100%;
    
}
.headerTop {
    width: 100%;
    height: 30vh;
    position: relative;
}
.headerTop h1 {
    font-size: 60px;
    font-family: 'IM Fell English SC', serif;
    color: var(--main-contrast);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.headerTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
}
.headerIntro {
    padding: 15vh 25vw;
}
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
    margin: auto;
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