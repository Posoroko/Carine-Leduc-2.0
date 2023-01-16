import { usePrestaStore } from "./prestations"
import { useAboutStore } from "./about"
import { useAgendaStore } from "./agenda"
import { useBlogStore } from "./blog"


const prestaStore = usePrestaStore()
const aboutStore = useAboutStore()
const agendaStore = useAgendaStore()
const blogStore = useBlogStore()


//this function triggers all queries in the background

export const backgroundDataFetching = async (urlPath) => {

    if(prestaStore.prestations.length === 0) {
        await prestaStore.initializeData()
    }
    // if(urlPath !== '/a-propos') {
    //     await aboutStore.initializeData()
    // }
    // if(urlPath !== '/agenda') {
    //     await agendaStore.initializeData()
    // }
    // if(urlPath !== '/blog') {
    //     await blogStore.initializeData()
    // }
}