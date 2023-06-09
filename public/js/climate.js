"use strict";
//6b607f6ee8ce76c7e696294dda3a251f
//http://openweathermap.org/img/wn/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Functions Select Element
function qs(e) {
    return document.querySelector(e);
}
function all(e) {
    return document.querySelector(e);
}
// Data
let apiKey = '6b607f6ee8ce76c7e696294dda3a251f';
// Functions
setInterval(() => {
    searchClimate();
}, 60000);
searchClimate();
function searchClimate() {
    return __awaiter(this, void 0, void 0, function* () {
        let cityStorage = localStorage.getItem('city');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityStorage !== null ? cityStorage : 'São Paulo'}&units=metric&appid=${apiKey}&lang=pt_br`;
        let result = yield fetch(url);
        let json = yield result.json();
        printClimateDisplay({
            cityName: json.name,
            cityTemp: json.main.temp,
            cityDescription: json.weather.description,
            cityTempIcon: json.weather.icon,
            cityHumidity: json.main.humidity,
            cityTempMax: json.main.temp_max,
            cityTempMin: json.main.temp_min,
            cityWind: json.wind.speed
        });
    });
}
function printClimateDisplay(json) {
    let cityElement = qs('#cityNameHeader');
    let cityClimateElement = qs('#cityTempHeader span');
    cityElement.innerHTML = json.cityName;
    cityClimateElement.innerHTML = `${json.cityTemp.toFixed(0)}º`;
}
