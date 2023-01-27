<template>
    <header class="smallHeader">
        <div class="headerTop">
            <img src="/images/headers/prestations.jpg" alt="">
            <h1 class="animatedTitle">Prestations</h1>
        </div>
    </header>

    <main class="prestaBoard">
        <div class="background"></div>

        <div class="prestaPanelBox" v-for="(presta, index) in prestations.data" :key="presta.id">
            <PrestaPanel  :presta="presta" :listsOn="false" />
        </div>        
    </main>
</template>

<script setup>
import PrestaPanel from '@/components/prestations/PrestaPanel'



const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Prestations'

const { data: prestations } = await useAsyncData(
    'prestations', 
    async () => {
        const items = await $fetch(url)
        return items
    }
    ,
    { server: true }
)


</script>




<style scoped>
.prestaBoard {
    width: var(--mid-width);
    border-radius: 20px;
    padding: clamp(5px, 2vw, 30px);
    margin: 100px auto ;
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