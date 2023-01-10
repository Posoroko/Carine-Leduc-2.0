//Transform dates from YYY-MM-DD to DD-MM
export const dateToDayMontformat = (yyymmdd) => {
        const chunks = yyymmdd.split('-')
        return `${chunks[2]}/${chunks[1]} `
}
// <=

export const isEmailIsWellFormated = (email) => {

        if(email.length < 3 || email.length > 320) return false

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        return re.test(email)
}


const days = ['dimanche', 'dundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

export const createDateString = (date) => {
    
    const string = `le ${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        
    return string
}
