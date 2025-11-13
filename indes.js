//const squares = [...document.querySelectorAll('.square')];
const btnReset = document.querySelector('#reset-btn');
const btnChangeGridSize = document.querySelector('#charge-grid-size');
const gridContainer = document.querySelector('#grid-container');
let numberOfSquares = prompt('Insira um numero inteiro de 1 a 100');



btnReset.addEventListener('click', ()=>{
	for(const square of squares) {
		square.classList.remove('black');
		square.style.opacity = '';
	}
});

function cleanChild(){
	if (gridContainer.childElementCount == 0)
		return ;
	const children = [...gridContainer.childNodes];
	for(const child of children)
		gridContainer.removeChild(child);
}

function createSquares(){
	const squares = [];
	const sizeOfSquare = (500 / parseFloat(numberOfSquares)).toFixed(2);
	for(let i = 0; i < parseInt(numberOfSquares) * parseInt(numberOfSquares); i++) {
		let element = document.createElement('div');
		element.classList.add('square');
		element.style.width = sizeOfSquare+'px';
		element.style.height = sizeOfSquare+'px';
		squares.splice(i, 0, element);
	}
	return (squares);
}

function render(){
	cleanChild();
	const squares = createSquares();
}


render();