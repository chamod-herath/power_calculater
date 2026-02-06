let answer;
let base;
let exponent;


document.getElementById(`submit`).onclick = function(event){

    event.preventDefault();

    base = document.getElementById(`base`).value;
    exponent = document.getElementById(`exponent`).value;

    answer = Math.pow(base, exponent);
    console.log(answer);
    document.getElementById(`answer`).textContent = ` ${answer}`


}