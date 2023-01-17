<template>
    <header class="prestationsHeader">
        <div class="headerTop">
            <h1>{{ eric }}</h1>
            <img src="images/deco/chemin-foret.jpg" alt="">
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

.prestationsHeader .headerTop {
    width: 100%;
    height: 30vh;
    position: relative;
}
.prestationsHeader .headerTop h1 {
    font-size: 60px;
    font-family: 'IM Fell English SC', serif;
    color: var(--main-contrast);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.prestationsHeader .headerTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
}

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
    background-image: url("public/images/deco/motif feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}


</style>