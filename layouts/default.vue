<template>
    <TopBar :isBlog="false" />
    <div>
        <slot />
    </div>

    <Footer />
</template>

<script setup>

// import { usePrestaStore } from '@/stores/prestations';
// const prestaStore =  usePrestaStore()

// const appConfig = useAppConfig()

// const url = appConfig.directus.items + 'Prestations'

// const prestaFetchOptions = {
//     key: 'prestations',
//     server: true
// }

// const { data: prestations } = await useFetch(url, prestaFetchOptions)

// for(let i = 0; i < prestations.value.data.length; i++) {
//     console.log(i)
//     const prestaType = prestations.value.data[i].name

//     const prestaTypeFetchOptions = {
//         key: prestaType,
//         server: true
//     }

    
//     const url = appConfig.directus.items + prestaType
//     const { data: items } = await useFetch(url, prestaTypeFetchOptions)
//     prestations.value.data[i].items = items.value.data
// }

// onMounted(() => {
//     console.log(prestations.value.data)

//     prestaStore.setPrestations(prestations.value.data)
// })

</script>

<style>
    /* imports of all css files */
    /* @import '@/assets/css/reset.css';
    @import '@/assets/css/variables.css'; */
</style>