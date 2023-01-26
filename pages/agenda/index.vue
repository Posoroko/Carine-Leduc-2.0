<template>
    <header class="smallHeader">
        <div class="headerTop">
            <img src="/images/deco/chemin-foret.jpg" alt="">

            <h1>Agenda</h1>
        </div>
        
    </header>

    <main>
        <div class="board">
            <div class="dateCard reactiveCardBasicStyles_userActions reactiveCard_userActions" v-for="date in dates" :key="date.id">
                <NuxtLink :to="`/agenda/${date.title}`">
                    <div class="titleBox">
                        <p class="date">{{ formatDateDDMM(date.date) }} </p>
                        <p class="title">{{ date.title }}</p>
                        <p class="location"><span v-if="date.where">{{ date.where }}</span> <span v-if="date.where && date.time">-</span> <span v-if="date.time">{{ date.time }}</span></p>
                    </div>
                
                
                    <span class="dateLink icon">arrow_forward</span>
                </NuxtLink>
            </div>
        </div>

        <div class="newsLetterBox">
            <miscNewsletterWidget />
        </div>

          
    </main>


</template>

<script setup>
import { formatDateDDMM } from '@/composables/dataManipulation'

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Agenda'

const { data: dates } = await useAsyncData(
    'agenda', 
    async () => {
        const items = await $fetch(url)
        console.log(items.data)
        items.data.forEach(item => {
            item.time = item.time.slice(0, 5)
        })
        return items.data
    }
    ,
    { server: true }
)

</script>

<style scoped>
.board {
    background-color: var(--panel);
    padding: 30px;
    border-radius: var(--panel-radius);
    margin-top: 50px;
    box-shadow: var(--panel-shadow);
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.dateCard {
    width: 100%;
    padding: 20px;
    padding-left: 80px;
    border-radius: 10px;
    border-bottom-left-radius: 80px;
    position: relative;
}

.dateCard .titleBox {
    font-family: var(--main-text-font);
}
.dateCard .titleBox .date {
    font-size: clamp(18px, 2vw, 35px);
    font-weight: 100;
}
.dateCard .titleBox .title {
    color: var(--gold-text);
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 200;
}
.dateCard .titleBox .location {
    font-size: clamp(16px, 1.5vw, 24px);
    font-weight: 200;
}

.dateCard .dateLink {
    font-size: 60px;
    font-weight: 100;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 5vw;
    bottom: 0;
    opacity: 0;
    transition: all 300ms ease;
}
.dateCard:hover .dateLink {
    right: 2vw;
    opacity: 1;
    transition: all 300ms ease;
}
</style>