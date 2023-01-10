import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => ({
        directusItems: 'https://ku3vu7zb.directus.app/items/',
        directusAssets: 'https://ku3vu7zb.directus.app/assets/'
    })

})