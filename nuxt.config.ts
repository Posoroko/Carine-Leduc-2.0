// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '@/assets/css/variables.css',
      '@/assets/css/reset.css',
      '@/assets/css/fonts.css',
      '@/assets/css/main.css'
    ],

    modules: [
      "nuxt-directus"
    ],

    directus: {
      url: "https://ku3vu7zb.directus.app"
    }
  
})
