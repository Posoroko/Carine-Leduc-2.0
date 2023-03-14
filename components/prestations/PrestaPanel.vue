<template>
    
    <section class="prestaPanel  reactiveCardBasicStyles_userActions panel" :class="{reactiveCard_userActions: listsOn === false}">
        <img class="cardMoon" src="/images/deco/presta-panel-moon.jpg" alt="">
        
        <div class="prestaSectionHeader">
            <figure class="prestaCardFrame">

                <img class="cardImage" src="/images/deco/carte.jpg" alt="">

            </figure>

            <div class="prestaTitleBox">
                <h1 class="prestaTitle">{{ presta.name }}</h1>

                <h3 class="prestaTitle">{{  presta.accroche }}</h3>
            </div>
        </div>

        <ul class="prestaList" v-if="listsOn === true">
            <li class="prestaItem" v-for="(item, index) in listOfItems" :key="item.id">
                <NuxtLink class="box" :to="`/prestations/${presta.idName}/${item.slug}`">

                    <div class="line">0{{ index + 1 }}</div>

                    <div class="itemBox">
                        <h3 class="itemTitle">{{ item.name }}</h3>

                        <p class="accroche">{{ item.accroche }}</p>

                        <!-- links in the list on the presta type page -->
                        
                        <div class="more">
                            <span>découvrir...</span>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>

        <!-- Link for presta types on prestations page -->
        <NuxtLink class="moreLink" :to="`/prestations/${presta.idName}`" v-if="listsOn === false">

        </NuxtLink>

    </section>
</template>

<script setup>

const props = defineProps({
    presta: Object,
    listsOn: Boolean,
})

const appConfig = useAppConfig()

const url = appConfig.directus.items + props.presta.idName

// fetching the list of services of the specific type (soins, massages, etc.)
const { data: listOfItems } = await useAsyncData(
    props.presta.name, 
    async () => {
        const items = await $fetch(url)
        console.log(items.data[0]) 
        return items.data
    }
    ,
    { server: true }
)

</script>

<style scoped>
.prestaPanel {
    width: 100%;
    padding: clamp(5px, 2vw, 30px);
    border-radius: 10px;
    box-shadow: var(--panel-shadow);
    display: block;
    position: relative;
    z-index: 10;
    overflow: hidden;
}
.cardMoon {
    height: 130%;
    position: absolute;
    top: -10%;
    opacity: 0;
    mix-blend-mode: multiply;
    filter: blur(5px);
    transition: 500ms ease;
}
.prestaPanelBox:nth-child(2n+2) .prestaPanel .cardMoon {
    transform: scaleX(-1);
    right: 0;
}
.prestaPanelBox:nth-child(2n+3) .prestaPanel .cardMoon {
    
    left: 0;
}
.prestaPanel:hover .cardMoon {
    filter: blur(1px);
    opacity: 0.4;
    transition: 500ms ease;
}

.moreText {
    font-size: 24px;
    font-weight: 200;
    font-family: var(--main-text-font);
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: 300ms ease;
}

.moreLink {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
}

.prestaPanel:hover .moreText {
    opacity: 1;
    transition: 300ms ease;
}

.prestaPanelBox:nth-child(2n+3) .prestaPanel .prestaSectionHeader{
    display: flex;
    flex-direction: row-reverse;
}


.cardImage {
    border-radius:  5px;
}

.prestaSectionHeader .prestaTitleBox {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--transparent-card);
    position: absolute; 
}
/* left side title box */
.prestaPanelBox:nth-child(2n+2) .prestaPanel .prestaSectionHeader .prestaTitleBox{
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    align-items: flex-start;
}

/* right side title box */
.prestaPanelBox:nth-child(2n+3) .prestaPanel .prestaSectionHeader .prestaTitleBox{
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    /* align-items: flex-end; */
}
/* right side titles */
.prestaPanelBox:nth-child(2n+3) .prestaPanel .prestaSectionHeader .prestaTitleBox .prestaTitle{
    text-align: end;
}

.prestaSectionHeader{
    padding: 30px 20px;
    position: relative;
}

.prestaSectionHeader .prestaTitleBox h1 {
    font-size: var(--item-title-size);
    font-family: var(--english);
    color: var(--gold-text);
}
.prestaSectionHeader .prestaTitleBox h3 {
    font-size: var(--item-subtitle-size);
    font-family: var(--main-text-font);
    font-weight: 300;
    color: var(--text);
    margin-top: 20px;
}

.prestaList{
    padding: clamp(5px, 2vw, 30px);
}
.prestaList .prestaItem {
    font-family: var(--main-text);
    position: relative;
}



.prestaList .prestaItem .line {
    font-weight: 200;
    color: var(--text);
    border-bottom: 1px solid var(--panel-border);
}

.prestaList .prestaItem .itemBox {
    font-family: var(--main-text-font);
    padding: clamp(5px, 2vw, 30px);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    /* gap: 20px; */
}
.prestaList .prestaItem .itemBox:hover {
    background-color: rgba(255, 255, 255, 0.034);
}
.prestaList .prestaItem .itemBox .itemTitle {
    color: var(--text);
    font-weight: 300;
    width: min(100%, 200px);
}
.prestaList .prestaItem .itemBox .accroche {
    color: var(--text);
    font-size: var(--main-text-size);
    font-weight: 300;
    width: min(100%, 360px);
}
.prestaList .prestaItem .itemBox .more {
    text-align: center;
    color: var(--gold-text);
    font-weight: 300;
    width: min(100%, 100px);
    display: grid;
    place-items: center;
}
</style>