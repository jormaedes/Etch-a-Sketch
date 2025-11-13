const btnReset = document.querySelector('#reset-btn');
const btnChangeGridSize = document.querySelector('#change-grid-size');
const gridContainer = document.querySelector('#grid-container');
const btnRainbow = document.querySelector('#rainbow');
const btnDefault = document.querySelector('#default');
const SIZEGRID = 500;
let numberOfSquares = '';
let defaultColor = 1;

btnReset.addEventListener('click', ()=>{
	const squares = [...document.querySelectorAll('.square')];
	for(const square of squares) {
		square.style.background = '';
		defaultColor = 1;
	}
});

btnRainbow.addEventListener('click', ()=>{
	defaultColor = 2;
});

btnDefault.addEventListener('click', ()=>{
	defaultColor = 1;
});



btnChangeGridSize.addEventListener('click', ()=>{
	resize();
});

function parserInput(input){
	if (input == null)
		return 1;
	const value = parseInt(input);
	if(value > 0 && value < 101)
		return 1;
	return 0;
}

function cleanChild(){
	if (gridContainer.childElementCount == 0)
		return ;
	const children = [...gridContainer.childNodes];
	for(const child of children)
		gridContainer.removeChild(child);
}

function putColor(element) {
	if (defaultColor == 1)
	{
		element.style.background = 'black';
		return ;
	}
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	element.style.background = `rgb(${r}, ${g}, ${b})`;
}

function createSquares(input){
	const sizeOfSquare = (SIZEGRID / parseFloat(input)).toFixed(2);
	for(let i = 0; i < parseInt(input) * parseInt(input); i++) {
		let element = document.createElement('div');
		element.classList.add('square');
		element.style.width = sizeOfSquare+'px';
		element.style.height = sizeOfSquare+'px';
		element.addEventListener('mouseenter', ()=>{
			putColor(element);
		});
		gridContainer.appendChild(element);
	}
}

function render(input){
	if (input == null)
		return ;
	cleanChild();
	createSquares(input);
}

function resize() {
	let input = '';
	while(!parserInput(input))
		input = prompt('Insira um numero inteiro de 1 a 100');
	render(input);
}

gridContainer.style.width = SIZEGRID.toString()+'px';
render(10);