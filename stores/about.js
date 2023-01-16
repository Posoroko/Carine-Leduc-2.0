import { defineStore } from 'pinia'

const configStore = useConfigStore();

export const useAboutStore = defineStore('about', {
    state: () => ({
        dataDownloaded: false,
        Carine: [],
        Biographie: [], //check if its array or object
        Jobs: [],
        Qualifications: [],
        Contact: {} //check if its array or object
    }),

    actions: {

        //called by the initializeAllTypesOfData function in store/prestations
        async initializeData() {


        }
    }
})

