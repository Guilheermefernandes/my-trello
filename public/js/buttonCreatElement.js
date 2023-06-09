"use strict";
document.querySelectorAll('#creatTask').forEach(item => {
    item.addEventListener('click', creatTask);
});
function buttonSend() {
    document.querySelectorAll('.button').forEach(item => {
        item.addEventListener('click', (e) => {
            let element = e.currentTarget;
            let nearestItem = element.closest('.edit');
            let textTask = nearestItem === null || nearestItem === void 0 ? void 0 : nearestItem.querySelector('.textTask');
            let textTaskValue = textTask.value;
            if (textTask.value !== '') {
                nearestItem.innerHTML = textTaskValue;
                taskConfigs();
            }
            else {
                alert('Digite algo!');
            }
        });
    });
}
function buttonDeleteElement() {
    document.querySelectorAll('.buttonDelete').forEach(item => {
        item.addEventListener('click', (e) => {
            let element = e.currentTarget;
            let nearestItem = element.closest('.indetifierButton');
            let parentElement = nearestItem.parentNode;
            let parentElementList = parentElement.parentNode;
            parentElementList.removeChild(parentElement);
        });
    });
}
function creatTask(e) {
    let element = e.currentTarget;
    let nearestItem = element.closest('.area');
    let divElement = document.createElement('div');
    divElement.setAttribute('draggable', 'true');
    divElement.classList.add('listTask', 'edit');
    let textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'Tarefa...');
    textarea.classList.add('textTask');
    let divButtons = document.createElement('div');
    divButtons.classList.add('indetifierButton');
    divButtons.style.display = 'flex';
    divButtons.style.alignItems = 'center';
    divButtons.style.gap = '10px';
    let button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Enviar Tarrefa';
    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('buttonDelete');
    buttonDelete.innerText = 'Fechar';
    divElement.appendChild(textarea);
    divElement.appendChild(divButtons);
    divButtons.appendChild(button);
    divButtons.appendChild(buttonDelete);
    nearestItem === null || nearestItem === void 0 ? void 0 : nearestItem.appendChild(divElement);
    buttonSend();
    buttonDeleteElement();
}
