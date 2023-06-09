"use strict";
let getCityModal = localStorage.getItem('city');
let getUserMoal = localStorage.getItem('username');
if (getCityModal === null && getUserMoal === null) {
    printModal();
}
function printModal() {
    let ElementModal = document.querySelector('#modal');
    ElementModal.style.display = 'block';
    setTimeout(() => {
        ElementModal.style.opacity = '1';
    }, 300);
}
function verification(name, city) {
    let dataRulesName = document.querySelector('#inputName');
    let formatInputData = dataRulesName.getAttribute('data-rules');
    let splitData = formatInputData.split('|');
    if (splitData[0] == 'required') {
        let contentInput = name.length;
        let min = splitData[1].substring(4, 5);
        if (contentInput >= parseInt(min)) {
            sendTo(name, city);
        }
        else {
            console.log(`Você digitou apenas ${contentInput} letra. Precisa de no minimo ${min}!`);
        }
    }
}
function sendTo(nameUser, city) {
    localStorage.setItem('userName', nameUser);
    if (city !== '') {
        localStorage.setItem('city', city);
    }
    let modal = document.querySelector('#modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    searchClimate();
    printNameDisplayHeader();
}
document.querySelector('#buttonModal').addEventListener('click', () => {
    let inputName = document.querySelector('#inputName');
    let inputCity = document.querySelector('#inputCity');
    if (inputName.value !== '') {
        verification(inputName.value, inputCity.value);
    }
    else {
        alert('Prencha o campo de nome! Obrigatório.');
    }
});
