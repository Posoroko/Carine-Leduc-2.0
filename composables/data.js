

export const prestations = ref(null)

const url = "https://ku3vu7zb.directus.app/items/Prestations?filter[active][_eq]=true"

export const initializeData = async () => {

    await 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            prestations.value = data.data
    })
}


