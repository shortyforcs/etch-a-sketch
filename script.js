const canvas = document.querySelector('.canvas');
//hard coding board size for now, will eventually be user input
const size = 16;

function buildBoard(size){
    const gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        //figure out how to add a div to canvas
        const div = document.createElement('div');
        div.classList.add('box')
        //adjust div size to the proportion needed based on canvas size
        div.style.height = `${500/size}px`
        div.style.width = `${500/size}px`
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'black'
        })
        canvas.appendChild(div);
    }
    // console.log(canvas)
}
buildBoard(size)
