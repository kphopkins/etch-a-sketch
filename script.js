const container = document.querySelector('#grid-container');

const reset = document.querySelector('#reset');
reset.addEventListener('click', getNum);

function getNum() {
    let num = prompt("How many squares would you like your grid to be?");
    createGrid(num);
}

function createGrid(numDivs) {
    container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
    for (let i = 0; i < (numDivs * numDivs); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-div');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}