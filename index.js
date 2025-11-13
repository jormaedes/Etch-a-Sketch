//const squares = [...document.querySelectorAll('.square')];
const btnReset = document.querySelector('#reset-btn');
const btnChangeGridSize = document.querySelector('#change-grid-size');
const gridContainer = document.querySelector('#grid-container');
const SIZEGRID = 500;
let numberOfSquares;

btnReset.addEventListener('click', ()=>{
	const squares = [...document.querySelectorAll('.square')];
	for(const square of squares) {
		square.classList.remove('black');
		square.style.opacity = '';
	}
});

btnChangeGridSize.addEventListener('click', ()=>{
	numberOfSquares = prompt('Insira um numero inteiro de 1 a 100');
	render();
});


function cleanChild(){
	if (gridContainer.childElementCount == 0)
		return ;
	const children = [...gridContainer.childNodes];
	for(const child of children)
		gridContainer.removeChild(child);
}

function putOnGridSquare(squares){
	for(const square of squares) {
		gridContainer.appendChild(square);
	}
}

function createSquares(){
	const squares = [];
	const sizeOfSquare = (SIZEGRID / parseFloat(numberOfSquares)).toFixed(2);
	for(let i = 0; i < parseInt(numberOfSquares) * parseInt(numberOfSquares); i++) {
		let element = document.createElement('div');
		element.classList.add('square');
		element.style.width = sizeOfSquare+'px';
		element.style.height = sizeOfSquare+'px';
		element.addEventListener('click', ()=>{
			element.classList.add('black');
		});
		squares.splice(i, 0, element);
	}
	return (squares);
}

function render(){
	cleanChild();
	gridContainer.style.width = SIZEGRID.toString()+'px';
	const squares = createSquares();
	putOnGridSquare(squares);
}

numberOfSquares = prompt('Insira um numero inteiro de 1 a 100');
render();