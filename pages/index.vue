<template>
    <main>
        <HomeHeader />
        
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

        <homeCardTable />

        <ImageBox image="/images/accueil.jpg" />
        
        <AgendaStripe />

        <AboutSection />

        <NewsletterWidget />
        
    </main>
</template>

<script setup>
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

</style>