const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('an error occured')
    }
}

const getCountry = async (countryCode) => {
     const response = await fetch('//restcountries.eu/rest/v2/all')

     if (response.status === 200) {
         const data = await response.json()
         return data.find((i) => i.alpha2Code === countryCode)
     } else {
         throw new Error('unable to fetch country data')
     }
}


const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=c07cd0a240b66d')
    
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const  country = await getCountry(location.country)

    return country.name
}
