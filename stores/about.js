import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        dataDownloaded: false,
        Carine: [],
        Biographie: [], //check if its array or object
        Jobs: [],
        Qualifications: [],
        Contact: {} //check if its array or object
    }),
    getters: {
        getInfoCarine() {
            return this.Carine
        },
        getBiographie() {
            return this.Biographie
        },
        getJobs() {
            return this.Jobs
        },
        getQualifications() {
            return this.Qualifications
        },
        getCabinet() {
            return this.Cabinet
        },
        getTechniques() {
            return this.Techniques
        },
        getContact() {
            console.log("in the getContact function in about store: ", this.contact)
            return this.Contact
        }
    },
    actions: {

        //called by the initializeAllTypesOfData function in store/prestations
        async initializeData() {

            //list of collections in the directus database.
            const listOfCollections = ['Carine', 'Biographie', 'Jobs', 'Qualifications', 'Contact']
            // <=

            for(let i = 0; i < listOfCollections.length; i++) {
                const url = `https://ku3vu7zb.directus.app/items/${listOfCollections[i]}`

                await fetch(url)
                .then(response => response.json())
                .then(data => {
                    
                    this[listOfCollections[i]] = data.data

                    console.log(listOfCollections[i], 'in about store: :', this[listOfCollections[i]])
                })
            }

            this.dataDownloaded = true
        }
    }
})

