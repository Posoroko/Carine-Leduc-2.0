<template>
    <main>
        <div class="board">
            <h1 class="title">{{ selectedDate.title }}</h1>
            
            <p class="location" v-if="selectedDate.where">à {{ selectedDate.where }}</p>
            
            <h2 class="date">{{ createDateString(selectedDate.date) }}</h2>

            <p>{{ selectedDate.description }}</p>
        </div>

        <div class="newsLetterBox">
            <miscNewsletterWidget />
        </div>
    </main>
</template>

<script setup>
import { formatDateDDMM } from '@/composables/dataManipulation'

const appConfig = useAppConfig()

const dateTitle = useRoute().params.title 

const url = appConfig.directus.items + 'Agenda'

const blogFetchOptions = {
    server: true,
    params: {
        filter: {
            title: {
                _eq: dateTitle
            }
        }
    }
}

const { data: selectedDate } = await useAsyncData(
    'agenda', 
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
.board {
    color: var(--main-text-color);
    background-color: var(--panel);
    padding: 30px;
    border-radius: var(--panel-radius);
    margin-top: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.board .title {
    font-family: var(--main-text-font);
    font-size: clamp(18px, 2vw, 35px);
    font-weight: 300;
}
.board .titleBox .date {
    font-size: clamp(18px, 2vw, 35px);
    font-weight: 100;
}


</style>