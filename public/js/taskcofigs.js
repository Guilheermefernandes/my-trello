"use strict";
taskConfigs();
function taskConfigs() {
    document.querySelectorAll('.listTask').forEach(item => {
        item.addEventListener('mouseover', modalConfig);
    });
}
function modalConfig(e) {
    e.preventDefault();
    let element = e.currentTarget;
    let elementAbsolutConfig = document.querySelector('.modalConfigsTs');
    element.addEventListener('contextmenu', function eixo(e) {
        e.preventDefault();
        let rect = element.getBoundingClientRect();
        let x = e.clientX;
        let y = e.clientY;
        elementAbsolutConfig.style.left = `${x + 20}px`;
        elementAbsolutConfig.style.top = `${y}px`;
        elementAbsolutConfig.style.display = 'block';
        elementAbsolutConfig.removeEventListener('contextmenu', eixo);
        element.appendChild(elementAbsolutConfig);
    });
}
