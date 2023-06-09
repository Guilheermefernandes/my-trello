"use strict";
setInterval(() => {
    let date = new Date;
    let dateNow = date.getHours();
    let minutsNow = date.getMinutes();
    let elemetDate = document.querySelector('#dateHeader');
    elemetDate.innerHTML = `${dateNow < 10 ? `0${dateNow}` : dateNow}:${minutsNow < 10 ? `0${minutsNow}` : minutsNow}`;
    hoursClimate(dateNow);
}, 100);
