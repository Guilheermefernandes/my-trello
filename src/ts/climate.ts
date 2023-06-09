//6b607f6ee8ce76c7e696294dda3a251f
//http://openweathermap.org/img/wn/

// Functions Select Element
function qs(e: string){
    return document.querySelector(e);
}
function all(e: string){
    return document.querySelector(e);
}

// Data
let apiKey = '6b607f6ee8ce76c7e696294dda3a251f';
type json = {
    cityName: string;
    cityTemp: number;
    cityDescription: string;
    cityTempIcon: string;
    cityHumidity: number;
    cityTempMax: number;
    cityTempMin: number;
    cityWind: number;
}

// Functions
setInterval(() => {
    searchClimate();
}, 60000)

searchClimate();
async function searchClimate(){
    
    let cityStorage = localStorage.getItem('city');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityStorage !== null ? cityStorage : 'São Paulo'}&units=metric&appid=${apiKey}&lang=pt_br`

    let result = await fetch(url);
    let json = await result.json();

    printClimateDisplay({
        cityName: json.name,
        cityTemp: json.main.temp,
        cityDescription: json.weather.description,
        cityTempIcon: json.weather.icon,
        cityHumidity: json.main.humidity,
        cityTempMax: json.main.temp_max,
        cityTempMin: json.main.temp_min,
        cityWind: json.wind.speed
    })
}

function printClimateDisplay(json: json){
    let cityElement = qs('#cityNameHeader')!;
    let cityClimateElement = qs('#cityTempHeader span')!;

    cityElement.innerHTML = json.cityName;
    cityClimateElement.innerHTML = `${json.cityTemp.toFixed(0)}º`;
}
