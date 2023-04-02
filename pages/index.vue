<template>
    <main>
        <Header />
        
        <section class="introHeader">
            <p class="garamond introText" ref="introText" vif="content.intro">
                {{ content.intro }}
            </p>
        </section>

        <CardTable />

        <ImageBox class="lune" imageLink="/images/deco/lune_fleurie.png"/>
        
        <AgendaStripe />

        <section class="decoStripe">
            <div class="frame">
                <ImageBox class="" imageLink="/images/deco/cercle-de-lune.png"/>
            </div>
        </section>

        <AboutSection id="aboutSection" />

        <NewsletterWidget />

        
    </main>
</template>

<script setup>
import Header from '@/components/homepage/Header'
import CardTable from '@/components/homepage/cardTable/CardTable'
import AgendaStripe from '@/components/homepage/agendaStripe/AgendaStripe'
import AboutSection from '@/components/homepage/aboutSection/AboutSection'
import ImageBox from '@/components/deco/ImageBox'
import NewsletterWidget from '@/components/misc/NewsletterWidget'

const introText = ref(null)

let observer = null

// onMounted(() => {
//     observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {

//             if (entry.isIntersecting) {
//                 entry.target.classList.remove('textOff')
//                 entry.target.classList.add('textOn')
//             } else {
//                 entry.target.classList.remove('textOn')
//                 entry.target.classList.add('textOff')
//             }
//         })
//     })

//     observer.observe(introText.value)
// })



const appConfig = useAppConfig()

const url = appConfig.directus.items

const { data: content } = await useAsyncData(
    'homepage',
    async () => {
        const items = await $fetch(`${url}/Intro_texts`)
        console.log(items.data.homepage) 
        return items.data
    }
    ,
    { server: true }
)

</script>



<style scoped>
.introHeader {
    width: var(--main-width);
    color: var(--text);
    padding: 50px 0;
    margin: auto;
    display: grid;
    place-items: center;
}
.introHeader p {
    width: min(800px, var(--main-width));
    font-size: clamp(20px , 2vw, 30px);
    font-family: var(--main-text-font);
    font-weight: 200;
    text-align: center;
    line-height: 1.5;
    color: var(--text);
    padding: 15px;
    margin: 100px 0;
    position: relative;
}

.marks1{
    font-family: var(--english);
    font-size: 60px;
    font-weight: 200;
    color: var(--main-contrast);
    margin: 15px;
    position: absolute;
    top: 0;
    left: 0;
    transform : translate(-60%, -25%);
}
.marks2{
    font-family: var(--english);
    font-size: 60px;
    font-weight: 200;
    color: var(--main-contrast);
    position: absolute;
    bottom: 0;
    right: 0;
    transform : translate(-50%, 50%);
}
.decoStripe {
    /* background-color: var(--main-contrast); */
    padding: 20px;
    display: flex;
    justify-content: center;
}

.decoStripe .frame {
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgba(212,99,0,0.3) 0%, rgba(212,99,0,0.3) 10%, transparent 68%, transparent 100%);
    /* background: radial-gradient(circle, rgba(212,99,0,0.3) 0%, rgba(212,145,0,0.1) 100%); */
    padding: 20px;
}

.lune {
    margin: 100px 0;
}
</style>