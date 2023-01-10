<template>
    <div>
        <p>agenda</p>
        <p v-for="date in agendaStore.allDates" :key="date.id">
            {{ date.title }}
        </p>
    </div>
</template>

<script setup>

import { useAgendaStore } from '@/stores/agenda';

const agendaStore = useAgendaStore();


</script>

<style scoped>
p {
    color: white;
}

</style>