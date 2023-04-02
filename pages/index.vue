<template>
    <main>
        <Header />
        
        <section class="introHeader" v-if="homeIntro">
            <p ref="introText" class="garamond introText"><span class="mark">" </span>{{ homeIntro }}<span class="mark"> "</span></p>
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

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.remove('textOff')
                entry.target.classList.add('textOn')
            } else {
                entry.target.classList.remove('textOn')
                entry.target.classList.add('textOff')
            }
        })
    })

    observer.observe(introText.value)
})



const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Intro_texts'

const { data: homeIntro } = await useAsyncData(
    'homepage',
    async () => {
        const items = await $fetch(url)
        console.log(items.data.homepage)
        return items.data.homepage
    }
    ,
    { server: true }
)

</script>



<style scoped>
.decoStripe {
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