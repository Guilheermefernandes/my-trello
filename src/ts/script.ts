setInterval(() => {
    document.querySelectorAll('.listTask').forEach(task => {
        task.addEventListener('dragstart', dragStart);
        task.addEventListener('dragend', dragEnd);
    });
}, 100);
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

function dragStart(e: Event){
    let elementEvent = e.currentTarget as HTMLElement;
    elementEvent.classList.add('drag');
}
function dragEnd(e: Event){
    let elementEvent = e.currentTarget as HTMLElement;
    elementEvent.classList.remove('drag');
}
function dragOver(e: Event){
    e.preventDefault();
}
function dragLeave(){

}
function drop(e: Event){
    e.preventDefault();
    let dragItem = document.querySelector('.listTask.drag') as HTMLElement;
    let element = e.currentTarget as HTMLElement
    element.appendChild(dragItem);
}