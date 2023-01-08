<template>
    <div v-if="selectedPresta">
        <PrestationHeader :title="selectedPresta.displayName" :imageUrl="`https://ku3vu7zb.directus.app/assets/${selectedPresta.headerImage}.jpg`"/>
    </div>
    <div v-if="selectedPresta">
        {{selectedPresta.name}}
        {{type}}
    </div>
</template>

<script setup>
// import { onMounted } from 'vue';
import PrestationHeader from '@/components/prestations/PrestationHeader'
import { prestations } from '@/composables/data'

const { type } = useRoute().params

//Object. 
const selectedPresta = ref(null)
// <=

onMounted(() => {
    selectedPresta.value = prestations.value.find(presta => presta.name === type)
})

</script>

<style scoped>
div {
    color: white;
}
</style>
