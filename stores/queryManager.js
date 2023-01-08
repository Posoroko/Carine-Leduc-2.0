import { usePrestaStore } from "./prestations"
import { useAboutStore } from "./about"

const prestaStore = usePrestaStore()
const aboutStore = useAboutStore()

//not sure if needed, but kept in just in case
const newVisit = true
// <=

// ths function is called by layouts/default.vue. It will trigger when the user first visits the website
export const initialQueryTrigger = async (urlPath) => {

    if(!newVisit) {
        defaultTrigger()
        newVisit = false
        return
    }

    console.log('initial query trigger called once')
    switch(urlPath) {
        case '/':
            prestaStore.initializeData()
            break
        case '/a-propos':
            await aboutStore.initializeData()
            break
        default:
            defaultQueryTrigger()
    }
}

//this function triggers all queries in the background

export const defaultQueryTrigger = () => {

    //could be a good idea to wait between each call

    if(!prestaStore.dataDownloaded) {
        prestaStore.initializeData()
    }
    if(!aboutStore.dataDownloaded) {
        aboutStore.initializeData()
    }
}