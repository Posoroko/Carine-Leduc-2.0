<template>
    <section class="table">

    </section>
</template>

<script setup>
const { getItems } = useDirectusItems();

let prestations = ref(null);

getItems({ collection: "Prestations" })
    .then(res => {
        prestations.value = res
    })
    .catch(err => {
        console.log(err.message)
    })

</script>

<style scoped>
.table {
    width: 100%;
    height: 100vh;
}
</style>