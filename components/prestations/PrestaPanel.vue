<template>
    <section class="prestaPanel panel">
        <div class="prestaSectionHeader">
            <figure class="prestaCardFrame prestaCardFrameLeft">
                <img src="images/deco/carte.jpg" alt="">
            </figure>

            <div class="prestaTitleBox prestaTitleBoxLeft">
                <h1>{{ presta.displayName }}</h1>

                <h3>{{  presta.accroche }}</h3>
            </div>                
        </div>

        <ul class="prestaList">
            <li class="prestaItem" v-for="(item, index) in listOfItems.data" :key="item.id">
                <div class="line">0{{ index + 1 }}</div>

                <div class="itemBox">
                    <h3 class="itemTitle">{{ item.name }}</h3>

                    <p class="accroche">{{ item.accroche }}</p>

                    <NuxtLink class="more" :to="item.link">
                        <span>découvrir...</span>
                    </NuxtLink>
                </div>
            </li>
        </ul>

    </section>
</template>

<script setup>

const props = defineProps({
    presta: {
        type: Object,
        required: true
    }
})

const appConfig = useAppConfig()
console.log(props.presta.name)
const url = appConfig.directus.items + props.presta.name

// fetching the list of services of the specific type (soins, massages, etc.)
const { data: listOfItems } = await useAsyncData(
    props.presta.name, 
    async () => {
        const items = await $fetch(url)
        return items
    }
    ,
    { server: true }
)

</script>

<style scoped>
.prestaPanel {
    width: 100%;
    background-color: var(--panel);
    padding: clamp(5px, 2vw, 30px);
    border: 1px solid var(--border);
    box-shadow: var(--panel-shadow);
    display: block;
    position: relative;
    z-index: 10;
}

.prestaSectionHeader {
    padding: 30px 20px;
    position: relative;
}

.prestaSectionHeader .prestaTitleBox {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--transparent-card);
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
}
.prestaSectionHeader .prestaTitleBox h1 {
    font-size: var(--item-title-size);
    font-family: var(--english);
    color: var(--gold-text);
}
.prestaSectionHeader .prestaTitleBox h3 {
    font-size: var(--item-subtitle-size);
    font-family: var(--main-text);
    font-weight: 300;
    color: var(--text);
}
.prestaList{
    padding: clamp(5px, 2vw, 30px);
}
.prestaList .prestaItem {
    font-family: var(--main-text);
}
.prestaList .prestaItem .line {
    font-weight: 200;
    color: var(--text);
    border-bottom: 1px solid var(--panel-border);
}

.prestaList .prestaItem .itemBox {
    padding: clamp(5px, 2vw, 30px);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.prestaList .prestaItem .itemBox .itemTitle {
    color: var(--text);
    font-weight: 300;
    width: min(100%, 200px);
}
.prestaList .prestaItem .itemBox .accroche {
    color: var(--text);
    font-size: var(--main-text-size);
    font-weight: 200;
    width: min(100%, 360px);
}
.prestaList .prestaItem .itemBox .more {
    color: var(--gold-text);
    font-weight: 200;
    width: min(100%, 100px);
    display: grid;
    place-items: center;
}




</style>