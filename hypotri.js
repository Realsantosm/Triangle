const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const hypotenuseOutput = document.querySelector('#hypotenuse-output');


function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

function calculateHypotenuse() {
	//c = sqrt(a^2 + b^2)
	const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
	console.log(sumOfSquares);
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	console.log(lengthOfHypotenuse);
	hypotenuseOutput.innerText = `😂The length of the hypotenuse is ${lengthOfHypotenuse} cm again what do you want to know, i can tell you only this much😎🤣`;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);