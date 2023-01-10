import { defineStore } from 'pinia'

export const usePrestaStore = defineStore('prestations', {
    state: () => ({
        dataDownloaded: false,
        prestations: [],
        soins: [],
        massages: [],
        tarologie: [],
        stages: [],
        accompagnements: []
    }),
    getters: {
        getPrestations() {
            return this.prestations
        },
        getSoins() {
            return this.soins
        },
        getMassages() {
            return this.massages
        },
        getTarologie() {
            return this.tarologie
        },
        getStages() {
            return this.stages
        },
        getAccompagnements() {
            return this.accompagnements
        }
    },
    actions: {

        async initializeData() {
            //récupérer les prestations actives
            const url = "https://ku3vu7zb.directus.app/items/Prestations?filter[active][_eq]=true"
            // <=

            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    // console.log(data.data)
                    this.prestations = data.data
                    console.log('here we go again', this.prestations)
                    this.initializeAllTypesOfPrestations()
                })

        },
        //once the prestations are initialized, we can initialize the other types of prestations in the background
        async initializeAllTypesOfPrestations() {
            const activePresta = [] 
            // console.log('initializing every prestations')

            this.prestations.forEach(presta => { activePresta.push(presta.name.toLowerCase()) })

            for(let i = 0; i < activePresta.length; i++) {
                const url = `https://ku3vu7zb.directus.app/items/${activePresta[i]}?filter[active][_eq]=true`

                await fetch(url)
                .then(response => response.json())
                .then(data => {
                    //ajouter les items à la bonne prestation
                    //utilisé pour le v-for sur la page des prestations
                    this.prestations[i].items = data.data
                    // <=
                    
                    //créer un conteneur pour chaque liste de prestaitons
                    //utilisé sur la page de la prestation
                    this[activePresta[i]] = data.data
                    // <=             
                    
                })
            }
            
            this.dataDownloaded = true
        }
    }



})