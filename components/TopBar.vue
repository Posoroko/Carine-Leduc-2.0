<template>
    <nav class="topBar" :class="isBlog == true ? 'blogTopBar' : 'mainSiteTopBar'">
        <div class="barBox">
            <NavBar :tabs="tabs" />
        </div>
        <div class="menuBox">
            <Menu :tabs="tabs" />
        </div>
    </nav>
</template>

<script setup>
import NavBar from '@/components/topBar/NavBar.vue'
import Menu from '@/components/topBar/Menu.vue'

const props = defineProps({
    isBlog: {
        type: Boolean,
    }
})

const tabs = ref([
    { name: 'Accueil', link: '/' },
    { name: 'Prestations', link: '/prestations' },
    { name: 'A propos', link: '/#aboutSection' },
    { name: 'Agenda', link: '/agenda' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' }
])

</script>

<style>


/* blogStyles */
    .blogTopBar .menuBox .box .modal{
        background-color: var(--blog-color);
    }

    .blogTopBar .menuBox .box .modal .menu{
        color: white;
        font-family: var(--blog-text-font);
    }

    .blogTopBar .barBox .box .tab {
        font-family: var(--blog-text-font);
        color: var(--blog-text-color);
    }

    .blogTopBar .barBox .box .tab .line{
        border-bottom: var(--blog-text-color);
    }
    


    

/* main site styles */

    .mainSiteTopBar{
        background-color: var(--background);
    }

    .mainSiteTopBar .barBox .box .tab:hover .line{
        border-bottom: 1px solid var(--main-text-color);
    }


@media (max-width: 749px) {
    .topBar .barBox {
        display: none;
    }
    .topBar .menuBox {
        display: auto;
    }
}
@media (min-width: 750px) {
    .topBar .barBox {
        display: auto;
    }
    .topBar .menuBox {
        display: none;
    }
}
</style>