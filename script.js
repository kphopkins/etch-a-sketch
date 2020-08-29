const container = document.querySelector('#grid-container');

const reset = document.querySelector('#reset');
reset.addEventListener('click', clearGrid);
reset.addEventListener('click', getNum);

createGrid();

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function getNum() {
    let num = prompt("Please choose a size for your grid:");
    createGrid(num);
}


function createGrid(numDivs = 16) {
    container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
    
    let color = getRGB();
    
    for (let i = 0; i < (numDivs * numDivs); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        container.appendChild(div);
        div.addEventListener('mouseover', () => event.target.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${darkenAlpha(event.target)})`);
    }
}


function getRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}


function darkenAlpha(target) {
    let alpha = Number(window.getComputedStyle(target).backgroundColor.match(/[.?\d]+/g)[3]);
    if (alpha <= 1) {
        return alpha += 0.1;
    }
    return alpha;
}