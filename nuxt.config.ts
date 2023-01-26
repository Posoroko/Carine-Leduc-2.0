// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'https://img.icons8.com/ios/50/null/seed-of-life.png',
                },
            ],
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Carine Leduc, thérapeute énergéticienne en Centre-Bretagne',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Présentations des services proposés par Carine Leduc, thérapeute énergéticienne.' },
                { name: "og:description", content: "Présentations des services proposés par Carine Leduc, thérapeute énergéticienne." },
                
                { name: "og:description", content: "Présentations des services proposés par Carine Leduc, thérapeute énergéticienne." },
                { name: "og:site_name", content: "Carine Leduc, thérapeute énergéticienne."},
                { name: "og:type", content: "website" },
                { name: "og:image", content: "@carine_leduc" },
                { name: "og:url", content: "https://carineleduc.netlify.app" },
            ],
        }
    },

    css: [
      '@/assets/css/variables.css',
      '@/assets/css/reset.css',
      '@/assets/css/fonts.css',
      '@/assets/css/main.css',
      '@/assets/css/blog.css',
      '@/assets/css/userActions.css',
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
