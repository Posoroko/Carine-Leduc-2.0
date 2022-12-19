<template>
    <section v-if="content">
        
        <div class="mainWidth board">
            <TitleBar :title="content.title" :link="linkToAboutPage"/>
            <h2 class="subtitle">{{ content.subtitle }}</h2>

            <div class="imageBoard b">
                <div class="imageBox imageBox1 r">
                    <img :src="`https://ku3vu7zb.directus.app/assets/${content.image1}.jpg`" alt="">
                    <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image1Title }} </NuxtLink>

                </div>
                <div class="imageBox imageBox2 r">
                    <img :src="`https://ku3vu7zb.directus.app/assets/${content.image3}.jpg`" alt="">
                    <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image3Title }} </NuxtLink>
                </div>
                <div class="imageBox imageBox3 r">
                    <img :src="`https://ku3vu7zb.directus.app/assets/${content.image2}.jpg`" alt="">
                    <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image2Title }} </NuxtLink>
                </div>
            </div>

            <div class="linkBoard">
                <div class="linkBox1">
                    <h4>
                        <NuxtLink to="/a-propos"> {{ content.image1Title }} </NuxtLink>
                    </h4>
                    <p>{{ content.image1Text }}</p>
                </div>

                <div class="linkBox2">
                    <h4>
                        <NuxtLink to="/a-propos/techniques"> {{ content.image3Title }} </NuxtLink>
                    </h4>

                    <p>{{ content.image2Text }}</p>
                </div>

                <div class="linkBox3">
                    <h4>
                        <NuxtLink to="/a-propos/cabinet"> {{ content.image2Title }} </NuxtLink>
                    </h4>
                    <p>{{ content.image3Text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import TitleBar from '@/components/homepage/TitleBar'

const linkToAboutPage = ref('/a-propos')

const { getItems } = useDirectusItems();

let content = ref(null);

getItems({ collection: "HomepageAbout" })
    .then(res => {
        content.value = res
        console.log(content.value)
    })
    .catch(err => {
        console.log(err.message)
    })


</script>

<style scoped>
section {
    width: 100%;
}
.board {
    background-color: var(--second-bg);
    padding: min(50px, 2vw);
}
.subtitle {
    color: var(--text);
    font-family: 'Work sans';
    font-size: 20px;
    font-weight: 100;
    text-align: center;
}

.imageBoard {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35vh 40vh;
    grid-gap: 20px;
    grid-template-areas: 
        "left topRight"
        "left bottomRight" 
}
.imageBox {
    display: grid;
    place-items: center;
    position: relative;
}
.imageTitle {
    color: rgb(191, 159, 17);
    font-size: 40px;
    text-shadow: 0px 0px 10px black;
    border-radius: 20px;
    position: absolute;
    left: 0;
    bottom:0;
}
.imageBox1 {
    grid-area: left;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.linkBoard {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap : 20px;
}
h4, p {
    color: var(--text);
}
</style>