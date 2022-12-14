//Transform dates from YYY-MM-DD to DD-MM
export const dateToDayMontformat = (yyymmdd) => {
        const chunks = yyymmdd.split('-')
        return `${chunks[2]}/${chunks[1]} `
}
// <=