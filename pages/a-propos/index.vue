<template>
    <AboutHeader :headerImageSrc="headerImageSrc" />

    <blockquote class="intro" v-if="content">
            <span class="quote">{{ content.accroche }}</span>
            <img class=""  src="/images/deco/cercle-dot.png" alt="">
    </blockquote>

    <main>
        <section class="board" v-if="content">
            <p class="presentation">
                {{ content.presentation }}
                
            </p>
        </section>

        <img class="fiveImageStripe" src="/images/deco/five-image-stripe-01.jpg" alt="">
    </main>
</template>

<script setup>
import AboutHeader from '@/components/about/AboutHeader.vue'
import FiveImageStripe from '@/components/deco/FiveImageStripe.vue'

// const { getItems } = useDirectusItems();
// const content = ref(null)
// const headerImageSrc = ref(null)


// getItems({ collection: "Page_A_Propos" })
//     .then(res => {
//         content.value = res
//         headerImageSrc.value = res.image_entete
//         console.log(headerImageSrc.value)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
</script>

<style scoped>
.intro {
    width: 100%;
    height: 75vh;
    text-align: center;
    color: var(--text);
    font-size: clamp(30px, 4vw, 60px);
    display: grid;
    place-items: center;
    position: relative;
}
.quote {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
}
.intro img {
    height: 100%;
}
.board {
    width: var(--mid-width);
    background-color: var(--second-bg);
    padding: 50px;
    border-radius: 20px;
    margin: auto;
}
.presentation {
    color: var(--text);
    font-size: clamp(16px, 2vw, 22px);
    line-height: 2rem;
    white-space: pre-wrap;
}

.fiveImageStripe {
    width: 100%;
}
</style>