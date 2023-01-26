<template>
    <section class="table">
        <div class="box1 absolute top right bottom left">
            <ArtDeco />
        </div>
        
        <div class="box2">
            <TitleBar title="Prestations" link="/prestations"/>
        </div>

        <div class="cardBox cardBoxOff" v-for="presta in prestations" :key="presta.id">
            <NuxtLink class="underCard" :to="presta.path">
                <p class="prestaDescription">{{presta.accroche}}</p>

                <span>découvrir...</span>

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
        return items.data
    }
    ,
    { server: true }
)

//card animation 

// let observer = null

// onMounted(() => {

//     const cardBoxes = document.querySelectorAll('.cardBox')
//     console.log(cardBoxes)

//     observer = new IntersectionObserver((entries) => {
//         let delay = 0

//         entries.forEach(entry => {
//             if (entry.isIntersecting) {

//                 setTimeout( () => {
//                     entry.target.classList.remove('cardBoxOff')

//                     entry.target.classList.add('cardBoxOn')
//                 }, delay)

//                 delay = delay + 150  
//             } 
//         })

//         observer.disconnect()
        
//     })
//     setTimeout( () => {
//         cardBoxes.forEach(cardBox => observer.observe(cardBox))
//     }, 1000)
// })


// const animationConfig = () => {

// }
 
</script>

<style>
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
/* .cardBoxOff {
    opacity: 0;
    transform: translateY(30%);
    transition: 300ms ease-out;
} */

.cardBoxOn {
    opacity: 1;
    transform: translateY(0%);
    transition: 500ms ease-out;
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