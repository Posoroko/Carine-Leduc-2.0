import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        dataDownloaded: false,
        carine: [],
        biographie: [],
        jobs: [],
        qualifications: []
    }),
    getters: {
        getInfoCarine() {
            return this.carine
        },
        getBiographie() {
            return this.biographie
        },
        getJobs() {
            return this.jobs
        },
        getQualification() {
            return this.qualifications
        },
        getCabinet() {
            return this.cabinet
        },
        getTechniques() {
            return this.techniques
        }
    },
    actions: {

        //called by the initializeAllTypesOfData function in store/prestations
        async initializeData() {

            const listOfCollections = ['Carine', 'Biographie', 'Jobs', 'Qualifications']

            for(let i = 0; i < listOfCollections.length; i++) {
                const url = `https://ku3vu7zb.directus.app/items/${listOfCollections[i]}`

                await fetch(url)
                .then(response => response.json())
                .then(data => {
                    // console.log('in about store: :', data.data)
                    this[i] = data.data
                })
            }

            this.dataDownloaded = true
        }
    }
})

