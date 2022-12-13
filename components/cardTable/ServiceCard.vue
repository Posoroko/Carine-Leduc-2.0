<template>
    <div class="card" ref="card">
        <img src="@/assets/images/deco/carte.jpg" alt="">

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
        // titleShadow.value.style.fontSize = fontSize * 1.1 + "px"
        console.log(card.value.offsetWidth - 15, cardTitle.value.offsetWidth)
    }
}
// onMounted(() => {
//     adjustFontSizeToCardWidth()
// })

</script>

<style>
.card {
    width: 100%;
    height: 100%;
    position: relative;
}

.card img {
    width: 100%;
    height: 100%;
}
.cardTitle {
    font-size: clamp(16px, 1.5vw, 28px);
    font-family: 'IM Fell English SC';
    text-align: center;
    color: var(--text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cardBox:hover .card {
    transform: rotateY(90deg);
}
</style>