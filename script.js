const canvas = document.querySelector('.canvas');
const resize = document.querySelector('.resize');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const colorPicker = document.querySelector('.color');
resize.addEventListener('click', (e) => {
    const inputSize = +prompt('Enter the board size you would like. Eg. 10 for a 10x10', 10);
    if(!inputSize) return;
    size = inputSize;
    clearBoard(canvas);
    buildBoard(size);
});
clear.addEventListener('click', (e) => {
    clearBoard(canvas);
    buildBoard(size);
});
eraser.addEventListener('click', (e) => {
    cursorColor = 'white';
});
colorPicker.addEventListener('click', (e) => {
    cursorColor = 'black';
});
let size = 16;
let isDragging = false;
let bgColor = 'white';
let cursorColor = 'black';
function clearBoard(board) {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}
function buildBoard(size){
    const gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        //figure out how to add a div to canvas
        const div = document.createElement('div');
        div.classList.add('box')
        //adjust div size to the proportion needed based on canvas size
        div.style.height = `${500/size}px`
        div.style.width = `${500/size}px`
        //only want to draw when mouse is clicked AND dragged
        div.addEventListener('pointerdown', (e) => {
            isDragging = true;
            div.style.backgroundColor = cursorColor;
        })
        div.addEventListener('pointerup', (e) => {
            isDragging = false 
        })
        div.addEventListener('pointerover', (e) => {
            if(isDragging){
                div.style.backgroundColor = cursorColor;
            }
        })
        canvas.appendChild(div);
    }
    canvas.onmouseleave = () => {
        isDragging = false;
    }
}
buildBoard(size);