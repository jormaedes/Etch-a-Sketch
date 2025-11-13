const squares = [...document.querySelectorAll('.square')];
const btnReset = document.querySelector('#reset-btn');

btnReset.addEventListener('click', ()=>{
	for(const square of squares) {
		square.classList.remove('black');
		square.style.opacity = '';
	}
});

for(const square of squares) {
	square.addEventListener('click', (e)=>{
		let op;
		if (e.target.style.opacity === '')
			op = "0.1";
		else{
			op = parseFloat(e.target.style.opacity);
			if (op == 1) return;
			op += 0.1;
			op = op.toString();
		}
		e.target.style.opacity = op;
		console.log(e.target.style.opacity);
		e.target.classList.add('black');
		console.log(e.target);
	})
}