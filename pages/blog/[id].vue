<template>

</template>

<script setup>

definePageMeta({
  layout: "blog",
});

const appConfig = useAppConfig()

const blogId = useRoute().params.id

const blogUrl = appConfig.directus.items + "Blogs"

const blogFetchOptions = {
    server: true,
    params: {
        filter: {
            id: {
                _eq: blogId
            }
        }
    }
}

const { data: blogConfig } = await useAsyncData(
    'blog' + blogId, 
    async () => {
        const item = await $fetch(blogUrl, blogFetchOptions)
        return item.data[0]
    }
    ,
    { server: true }
)


</script>

<style scoped>
</style>