const searchButton = document.querySelector('.button')
const city = document.querySelector('.city')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let weatherIcon = document.querySelector('.icon');

searchButton.addEventListener("click", function(){
const location = city.value
    getWeatherData(location)

})
function getWeatherData(location){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ad15d9db4bbca99e7c3d083640de25d1`
    
return fetch(url)
.then(response => response.json())
.then(getData)
.catch(err => console.log(err)); 

 }

const getData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`
    weatherIcon.innerHTML = `<img src='http://openweathermap.org/img/w/${weather.weather[0].icon}.png' alt='Icon depicting current weather.'/>`

}




