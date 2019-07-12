const key = "PW6E3dkYGMwA0xy70rSNwzY7e6Mhg4qP";
//get weather Information
const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query =`${id}?apikey=${key}`
    const response = await fetch(base + query)
    const data =await response.json()
    // console.log(data)
    return data[0]
}

//get locationID
const getCity = async (city)=> {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data =await response.json()
    return data[0]
    // console.log(data)
}

// getCity('manchester')
// .then( data => {
//     console.log(data)
//    return getWeather(data.Key)
// })
// .then(data => {
   
//         console.log(data)
    
// })
// .catch( err => {
//     console.log(err)
// })
