let getCityModal = localStorage.getItem('city');
let getUserMoal = localStorage.getItem('username');

if(getCityModal === null && getUserMoal === null){
    printModal();
}

function printModal(){
    let ElementModal = document.querySelector('#modal') as HTMLElement;
    ElementModal.style.display = 'block';
    setTimeout(() => {
        ElementModal.style.opacity = '1';
    }, 300)
}
function verification(name: string, city: string){
    let dataRulesName = document.querySelector('#inputName') as HTMLInputElement;
    let formatInputData = dataRulesName.getAttribute('data-rules')!;
    let splitData = formatInputData.split('|');

    if(splitData[0] == 'required'){
        let contentInput = name.length;
        let min = splitData[1].substring(4, 5);
        if(contentInput >= parseInt(min)){
            sendTo(name, city);
        }else{
            console.log(`Você digitou apenas ${contentInput} letra. Precisa de no minimo ${min}!`)
        }
    }

}
function sendTo(nameUser: string, city: string){
    localStorage.setItem('userName', nameUser);
    if(city !== ''){
        localStorage.setItem('city', city);
    }
    let modal = document.querySelector('#modal') as HTMLElement;
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    searchClimate();
    printNameDisplayHeader();
}
document.querySelector('#buttonModal')!.addEventListener('click', () => {

    let inputName = document.querySelector('#inputName') as HTMLInputElement;
    let inputCity = document.querySelector('#inputCity') as HTMLInputElement;

    if(inputName.value !== ''){
        verification(inputName.value, inputCity.value);
    }else{
        alert('Prencha o campo de nome! Obrigatório.')
    }

})