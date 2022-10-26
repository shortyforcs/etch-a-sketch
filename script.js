const canvas = document.querySelector('.canvas');
//hard coding board size for now, will eventually be user input
const size = 16;
let isDragging = false;

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
        div.addEventListener('mouseover', (e) => {
            if(isDragging)
                div.style.backgroundColor = 'black'
        })
        canvas.appendChild(div);
    }
    // console.log(canvas)
}
buildBoard(size)
