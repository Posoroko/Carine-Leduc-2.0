<template>
    <main>
        <Header />
        
        <section class="introHeader">
            <p class="garamond">
                Ma mission est d’éclairer ton chemin afin de mettre en lumière tes propres richesses en source
                d’évolution personnelle afin d’atteindre la sérénité et la paix. Nous entrons aujourd’hui dans
                une pleine conscience du lien entre le corps et la conscience de soi qui concerne l’ensemble
                des êtres Humains.
                Je t’ accompagne à te choisir, à devenir responsable de ta vie émotionnelle et psychique, en te
                reconnectant afin d’explorer les mille et un trésors qui dorment en toi.
            </p>
        </section>

        <CardTable />

        <ImageBox imageLink="_nuxt/assets/images/deco/lune_fleurie.png"/>
        
        <AgendaStripe />

        <section class="decoStripe">
            <div class="frame">
                <ImageBox class="" imageLink="_nuxt/assets/images/deco/cercle-de-lune.png"/>
            </div>
        </section>

        <AboutSection />

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
    font-size: 25px;
    width: min(800px, var(--main-width));
    color: var(--text);
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

</style>