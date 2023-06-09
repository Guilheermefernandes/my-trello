"use strict";
printNameDisplayHeader();
function printNameDisplayHeader() {
    let nameHeaderStorage = localStorage.getItem('userName');
    if (nameHeaderStorage !== null) {
        printNameUserHeader(nameHeaderStorage);
    }
    else {
        let elementNameHeader = document.querySelector('#nameUserHeader');
        elementNameHeader.innerHTML = `Hello List`;
    }
}
function printNameUserHeader(nameUser) {
    let elementNameHeader = document.querySelector('#nameUserHeader');
    elementNameHeader.innerHTML = `${nameUser}`;
}
function hoursClimate(hours) {
    let headerClimateHours = document.querySelector('#weellcome span');
    let verification = 0;
    if (hours > 5 && hours < 12) {
        verification = 1;
    }
    else if (hours >= 12 && hours <= 17) {
        verification = 2;
    }
    else if (hours >= 18) {
        verification = 3;
    }
    switch (verification) {
        case 1:
            headerClimateHours.innerHTML = 'Bom Dia!';
            break;
        case 2:
            headerClimateHours.innerHTML = 'Boa Tarde!';
            break;
        case 3:
            headerClimateHours.innerHTML = 'Boa noite!';
            break;
        default:
            headerClimateHours.innerHTML = 'Bem vindo a Hello List!';
            break;
    }
}
