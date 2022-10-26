const canvas = document.querySelector('.canvas');
const resize = document.querySelector('.resize');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const colorPicker = document.querySelector('.color');
resize.addEventListener('click', (e) => {
    const inputSize = parseInt(prompt('Enter the board size you would like. Eg. 10 for a 10x10', 10));
    console.log(typeof inputSize)
    if(typeof inputSize != 'number') return;
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
        div.addEventListener('mousedown', () => isDragging = true )
        div.addEventListener('mouseup', () => isDragging = false )
        div.addEventListener('mouseover', () => {
            if(isDragging)
                div.style.backgroundColor = cursorColor;
        })
        canvas.appendChild(div);
    }
}