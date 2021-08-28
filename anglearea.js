//JavaScript for the Area of a Triangle !!!!!!

const areaInputs = document.querySelectorAll('.area-inputs');
const areaBtn = document.querySelector('#area-btn');
const areaOutput = document.querySelector('#area-output');

function baseIntoHeight(base,height){
    const multiplied = base * height;
    return multiplied;
}

function calculateArea(){
    const baseIntoHeight = multiplyBaseAndHeight.innerHeight(areaInputs[0].nodeValue, areaInputs[1].value){
        const area = baseIntoHeight / 2;
        console.log({area});
        areaOutput.innerText = 'The aArea of a Triangle is ${area} cm^2'
    }
}

areaBtn.addEventListener('click', calculateArea);



