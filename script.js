const canvas = document.querySelector('.canvas');
const resize = document.querySelector('.resize');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const colorPicker = document.querySelector('.color');
const canvasLabel = document.querySelector('.canvas-label');
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
    canvasLabel.textContent = `${size} x ${size}`
    const gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        //figure out how to add a div to canvas
        const div = document.createElement('div');
        div.classList.add('box')
        //adjust div size to the proportion needed based on canvas size
        div.style.height = `${500/size}px`
        div.style.width = `${500/size}px`
        canvas.appendChild(div);
    }
    canvas.onmouseleave = () => {
        isDragging = false;
    }
    canvas.addEventListener('pointerdown', (e) => {
        isDragging = true;
        e.target.style.backgroundColor = cursorColor;
    })
    canvas.addEventListener('pointerup', (e) => {
        isDragging = false 
    })
    canvas.addEventListener('pointerover', (e) => {
        if(isDragging){
            e.target.style.backgroundColor = cursorColor;
        }
    })

}
buildBoard(size);