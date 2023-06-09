"use strict";
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
});
function dragStart(e) {
    let elementEvent = e.currentTarget;
    elementEvent.classList.add('drag');
}
function dragEnd(e) {
    let elementEvent = e.currentTarget;
    elementEvent.classList.remove('drag');
}
function dragOver(e) {
    e.preventDefault();
}
function dragLeave() {
}
function drop(e) {
    e.preventDefault();
    let dragItem = document.querySelector('.listTask.drag');
    let element = e.currentTarget;
    element.appendChild(dragItem);
}
