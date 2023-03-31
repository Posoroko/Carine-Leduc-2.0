<template>
    <section class="table">
        <div class="box1">
            <!-- <ArtDeco /> -->
        </div>
        
        <div class="box2">
            <TitleBar title="Prestations" link="/prestations"/>
        </div>

        <div class="cardBox cardBoxOff" v-for="presta in prestations" :key="presta.id">
            <NuxtLink class="underCard" :to="`/prestations/${presta.id}`">
                <p class="prestaDescription">{{presta.accroche}}</p>

                <div class="icon">arrow_forward</div>

            </NuxtLink>

            <ServiceCard :name='presta.name' />
        </div>
        
    </section>
</template>

<script setup>
import ArtDeco from '@/components/homepage/cardTable/ArtDeco.vue'
import ServiceCard from '@/components/homepage/cardTable/ServiceCard'
import TitleBar from '@/components/homepage/TitleBar.vue'

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Prestations'

const { data: prestations } = await useAsyncData(
    'prestations', 
    async () => {
        const items = await $fetch(url)
        console.log(items.data)  
        return items.data
    }
    ,
    { server: true }
)


 
</script>

<style scoped>
.table {
    width: var(--mid-width);
    background-color: var(--second-bg);
    padding: 90px 60px;
    margin: 0 auto;
    box-shadow: var(--panel-shadow) ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    position: relative;
    overflow: hidden;
}
.box1 {
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
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

.cardBox:hover {
    cursor: pointer;
}

.underCard {
    background-color: var(--main-bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.prestaDescription {
    color: var(--text);
    font-family: var(--main-text-font);
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding: 40px 20px;
}



.underCard .icon {
    color: var(--main-text-color);
    text-align: right;
    font-size: 48px;
    font-weight: 100;
    padding-right: 50px;
    padding-bottom: 20px;
    transition: 300ms ease;
}

.cardBox:hover .underCard .icon {
    
    padding-right: 10px;
    transition: 300ms ease;
}
</style>