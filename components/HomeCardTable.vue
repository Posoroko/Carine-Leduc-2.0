<template>
    <section class="table">
        <ArtDeco />
        <div class="cardBox" v-for="presta in prestations" :key="presta.name">
            <ServiceCard :name='presta.value' />
        </div>
        
    </section>
</template>

<script setup>
import ArtDeco from '@/components/cardTable/ArtDeco.vue'
import ServiceCard from '@/components/cardTable/ServiceCard'

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

<style>




.table {
    width: var(--main-width);
    background-color: var(--second-bg);
    padding: 10vw;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    position: relative;
    overflow: hidden;
}
.cardBox {
    width: min(200px, 30%);
    aspect-ratio: 5/9;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}



</style>