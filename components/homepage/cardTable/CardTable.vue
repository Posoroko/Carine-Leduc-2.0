<template>
    <section class="table">
        <div class="box1 absolute top right bottom left">
            <ArtDeco />
        </div>
        
        <div class="box2">
            <TitleBar title="Prestations" link="/prestations"/>
        </div>

        <div class="cardBox" v-for="presta in prestations.data" :key="presta.id">
            <NuxtLink class="underCard" :to="presta.path">
                <p class="prestaDescription">{{presta.description}}</p>

                <span>découvrir...</span>

            </NuxtLink>
            <ServiceCard :name='presta.displayName' />
        </div>
        
    </section>
</template>

<script setup>
import ArtDeco from '@/components/homepage/cardTable/ArtDeco.vue'
import ServiceCard from '@/components/homepage/cardTable/ServiceCard'
import TitleBar from '@/components/homepage/TitleBar.vue'

import { usePrestaStore } from '@/stores/prestations'
const prestaStore = usePrestaStore()

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

<style>

.table {
    width: var(--mid-width);
    background-color: var(--second-bg);
    padding: 90px 60px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    position: relative;
    overflow: hidden;
}
.box1 {
    z-index: 0;
}
.box2 {
    width: 100%;
    z-index: 5;
}
.cardBox {
    width: min(200px, 60%);
    aspect-ratio: 5/9;

    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: var(--card-shadow);
}
.underCard {
    background-color: var(--main-bg);
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: 10px;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    display: grid;
    place-items: center;
}
.prestaDescription {
    color: var(--text);
    text-align: center;
}

.underCard span {
    color: var(--text);
    font-family: 'Work Sans';
    position: absolute;
    bottom: 5%;
}

</style>