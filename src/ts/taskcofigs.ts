taskConfigs();
function taskConfigs(){
    document.querySelectorAll('.listTask').forEach(item => {
        item.addEventListener('mouseover', modalConfig)
    });
}

function modalConfig(e: Event){
    e.preventDefault();
    let element = e.currentTarget as HTMLElement;
    let elementAbsolutConfig = document.querySelector('.modalConfigsTs') as HTMLElement;
    
    element.addEventListener('contextmenu', function eixo(e){
        e.preventDefault();
        let rect = element.getBoundingClientRect() as DOMRect;
        let x = e.clientX;
        let y = e.clientY;

        elementAbsolutConfig.style.left = `${x + 20}px`;
        elementAbsolutConfig.style.top = `${y}px`;
        elementAbsolutConfig.style.display = 'block';
        elementAbsolutConfig.removeEventListener('contextmenu', eixo);
        element.appendChild(elementAbsolutConfig);
    });

}
