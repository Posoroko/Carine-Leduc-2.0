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

const { getItems } = useDirectusItems();

let tabs = ref(null);

getItems({ collection: "Tabs" })
    .then(res => {
        tabs.value = res
    })
    .catch(err => {
        console.log(err.message)
    })





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