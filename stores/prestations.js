import { defineStore } from 'pinia'
import { useConfigStore } from './config';
const configStore = useConfigStore();

export const usePrestaStore = defineStore('prestations', {
    state: () => ({
        prestations: [],
    }),

    actions: {

        setPrestations(prestations) {
            this.prestations = prestations
        }
        
    }
})