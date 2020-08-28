const container = document.querySelector('#grid-container');

function createGrid(numDivs) {
    container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
    for (let i = 0; i < (numDivs * numDivs); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-div');
        container.appendChild(div);
    }
}