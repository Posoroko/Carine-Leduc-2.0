<template>
    <section class="table">
        <div class="box2 absolute top right bottom left">
            <ArtDeco />
        </div>
        
        <div class="box2">
            <TitleBar title="Prestations" link="prestation)ç"/>
        </div>

        <div class="cardBox" v-for="presta in prestations" :key="presta.name">
            <div class="underCard">
                <p class="prestaDescription">
                    {{ presta.description }}
                </p>

                <button class="button">découvrir</button>
            </div>

            <ServiceCard :name='presta.value' />
        </div>
        
    </section>
</template>

<script setup>
import ArtDeco from '@/components/cardTable/ArtDeco.vue'
import ServiceCard from '@/components/cardTable/ServiceCard'
import TitleBar from '@/components/homepage/TitleBar.vue'

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
.box1 {
    z-index: 1;
}
.box2 {
    z-index: 5;
}
.cardBox {
    width: min(200px, 30%);
    aspect-ratio: 5/9;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: var(--card-shadow);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.prestaDescription {
    color: var(--text);
    text-align: center;
}

</style>