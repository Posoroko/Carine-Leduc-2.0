<template>
    <div>
        <p>liste des services</p>
        <p>service sélectionné: {{service}}</p>
    </div>
</template>

<script setup>
const { service } = useRoute().params
const { getItems } = useDirectusItems();

const soins = ref()

getItems({ collection: "Soins" })
    .then(res => {
        soins.value = res
        console.log(soins.value)
    })
    .catch(err => {
        console.log(err.message)
    })
</script>

<style scoped>

</style>