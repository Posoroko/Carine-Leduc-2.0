<template>
    <div>
        <p>agenda</p>
        
        <p v-for="date in dates.data" :key="date.id">
            {{ date.title }}
        </p>
    </div>
</template>

<script setup>

import { useAgendaStore } from '@/stores/agenda';

const agendaStore = useAgendaStore();

const fetchOptions = {
    key: 'agenda',
    server: true,
    params: {
        limit: 10,
        page: 1,
        sort: 'date'
    }
}

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Agenda?limit=10'

const { data: dates } = await useAsyncData(
    'agenda', 
    async () => {
        const items = await $fetch(url, fetchOptions)
        return items
    }
    ,
    { server: true }
)


</script>

<style scoped>
p {
    color: white;
}

</style>