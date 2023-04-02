<template>
    <div class="card" ref="card">
        <img src="/images/deco/carte.jpg" alt="">

        <p class="cardTitle" ref="cardTitle">{{ name }}</p>
    </div>
</template>

<script setup>


const props = defineProps(['name'])

const card = ref(null)
const cardTitle = ref(null)

const adjustFontSizeToCardWidth = () => {
    
    let fontSize = 1
    while(card.value.offsetWidth - 15 > cardTitle.value.offsetWidth){
        fontSize++
        cardTitle.value.style.fontSize = fontSize + "px"
        console.log(card.value.offsetWidth - 15, cardTitle.value.offsetWidth)
    }
}

</script>

<style>
.card {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 1;
    transition: opacity 300ms ease;
}

.card img {
    width: 100%;
    height: 100%;
}

.cardTitle {
    width: 100%;
    font-size: clamp(20px, 3vw, 28px);
    font-family: 'IM Fell English SC';
    text-align: center;
    color: var(--text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cardBox:hover .card {
    opacity: 0.2;
    transition: opacity 300ms ease;
    pointer-events: none;
}

.cardBox:hover .card .cardTitle{
    opacity: 0;
    transition: opacity 300ms ease;
}
</style>