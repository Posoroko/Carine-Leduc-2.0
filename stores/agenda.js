import { defineStore } from 'pinia'
import { dateToDayMontformat } from '@/composables/dataManipulation'

export const useAgendaStore = defineStore('agenda', {
    state: () => ({
        dataDownloaded: false,
        allDates: [],
    }),
    getters: {
        getAllDates() {
            return this.allDates
        }
    },
    actions: {

        async initializeData() {

            await fetch("https://ku3vu7zb.directus.app/items/Agenda")
            .then(response => response.json())
            .then(data => {
                this.allDates = data.data

                this.allDates.forEach(date => {
                    date.date = dateToDayMontformat(date.date) //composable/dataManipulation
                })
            })

            this.dataDownloaded = true
        }
    }
})
