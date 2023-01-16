// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '@/assets/css/variables.css',
      '@/assets/css/reset.css',
      '@/assets/css/fonts.css',
      '@/assets/css/main.css',
      '@/assets/css/blog.css'
    ],

    ssr: true,

    modules: [
      "nuxt-directus",
      "@pinia/nuxt",
      '@nuxtjs/apollo'
    ],

    directus: {
      url: "https://ku3vu7zb.directus.app"
    },

    apollo: {
        clients: {
            default: {
              httpEndpoint: 'https://ku3vu7zb.directus.app/graphql'
            }
          }
    }

})
