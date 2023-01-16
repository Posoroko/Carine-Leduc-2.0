import { defineStore } from 'pinia'
import { dateToDayMontformat } from '@/composables/dataManipulation'

export const useAgendaStore = defineStore('agenda', {
    state: () => ({
        dataDownloaded: false,
        allDates: [],
        lastBlogFetched: -1 // so the first feth will start at id == 0
    }),
    actions: {
        async getDates(numberOfItems ) {

        }
    }
})
