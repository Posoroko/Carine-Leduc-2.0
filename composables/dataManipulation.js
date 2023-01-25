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

//date au format: 'Le mercredi 25 décembre 2020
export const createDateString = (date) => {
    const tempDate = new Date(date)
    const string = `le ${days[tempDate.getDay()]} ${tempDate.getDate()} ${months[tempDate.getMonth()]} ${tempDate.getFullYear()}`
    return string
}

//date au format: '25-12
export const formatDateDDMM = (date) => {
    const tempDate = new Date(date)
    const day = tempDate.getDate()
    const month = tempDate.getMonth() + 1
    const string = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}`
    return string
}