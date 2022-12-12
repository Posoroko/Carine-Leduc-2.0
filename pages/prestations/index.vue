<template>
    <div>
        <p>voici la liste de prestations</p>
        <div v-for="presta in prestations" :key="presta.name">
            <NuxtLink :to="presta.link">
                {{ presta.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems();

const prestations = ref()

getItems({ collection: "Prestations" })
    .then(res => {
        prestations.value = res
        console.log(prestations.value)
    })
    .catch(err => {
        console.log(err.message)
    })

</script>



<style scoped>

</style>