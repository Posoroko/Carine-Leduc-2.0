<template>
    <nav class="topBar">
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

const tabs = ref([
    { name: 'Accueil', link: '/' },
    { name: 'Blog', link: '/blog' },
    
    { name: 'Prestations', link: '/prestations' },
    { name: 'Contact', link: '/contact' },
    { name: 'Agenda', link: '/agenda' },
    { name: 'A propos', link: '/a-propos' },
])



</script>

<style scoped>

.topNav{
    background-color: var(--second-bg)
}



@media (max-width: 749px) {
    .barBox {
        display: none;
    }
    .menuBox {
        display: auto;
    }
}
@media (min-width: 750px) {
    .barBox {
        display: auto;
    }
    .menuBox {
        display: none;
    }
}
</style>