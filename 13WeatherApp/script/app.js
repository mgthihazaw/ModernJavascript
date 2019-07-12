const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time =document.querySelector('img.time');
const icon =document.querySelector('.icon img');

const UpdatedUI = (data) => {
    // console.log(data)
    // const cityDetails = data.cityDetails
    // const weather = data.weather

    //destructuring properties
    const { cityDetails ,weather } =data

    //update detail template
    details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;</span>
                </div> `;

    //update the night/day & icon image 
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc)
    
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc) 

    //remove the d-one class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    //    console.log(cityDetails)
    const weather = await getWeather(cityDetails.Key);
    //    console.log(weather)

    return { cityDetails, weather }

}
cityForm.addEventListener('submit', e => {
    e.preventDefault()

    //get City Value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new City
    updateCity(city)
        .then(data => {
            UpdatedUI(data)
        })
        .catch(err => {
            console.log(err)
        })
        // localStorage.setItem('city',city)

})
// if(localStorage.getItem('city')){
//     updateCity(localStorage.getItem('city'))
//         .then(data => {
//             UpdatedUI(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }