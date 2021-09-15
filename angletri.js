const input = document.querySelectorAll('.inputBox');
const formTriangle = document.querySelector('#form-Triangle');
const outputHere = document.querySelector('.output-text');
const submitBtn = document.querySelector('#submit-btn');

let angles=[];

submitBtn.addEventListener('click', clickHandler);

function clickHandler(e){
    e.preventDefault();

    for(i=0; i < input.length; i++){
        angles[i]=Number(input[i].value);
    }

    let sum = 0;
    angles.map((angle)=>{
        sum = sum + angle;
    });

    if(sum === 180){
        outputHere.innerText = "Hurray! Your angles can make triangle...!  🤩";
    } else {
        outputHere.innerText = "Alas! Your angles could not form Triangle...! Your total sum of angles should be 180. 🤷‍♂️";
    }
    
}
