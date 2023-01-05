const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
	let inpData = sides[0].value;
	let inpDatas = sides[1].value;
	console.log("Your Data is here : ", inpData)
	console.log("Your Data 2 is here : ", inpDatas)
	
	if(Number(inpData) <= 0  || Number(inpDatas) <= 0) {
		alert('Your input value must be greater than 0️⃣');
		
	} else {
		
  //c = sqrt(a^2 + b^2)
    const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
    
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
    // console.log(lengthOfHypotenuse);

    hypotenuseOutput.innerText = `😂The length of the hypotenuse is ${lengthOfHypotenuse} cm
		Yeeeeeeiiii 😎🤣`;
		// console.log('Your logger')
	}
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
