function getCode(){
    const code = Math.round(Math.random()* 10000)
    const codeStiring = code+'';
    if(codeStiring.length == 4){
    document.getElementById('genarate-input').value = codeStiring;
    }
}
function genarate(){
    getCode()
}
document.getElementById('key-type').addEventListener('click',
function keyType(event){
    const calcInput = document.getElementById('calc-input');
    const number =  event.target.innerText
    if(isNaN( number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const calcInputValue = calcInput.value
        calcInput.value = calcInputValue + number ;
    }
})
function varyfyPin(){
    const genarateInput = document.getElementById('genarate-input');
    const calcInput = document.getElementById('calc-input');
    // calcInput.value = '';
    const seeYes = document.getElementById('see-yes');
    const seeNot = document.getElementById('see-not');
    if(genarateInput.value == calcInput.value){
     seeYes.style.display = 'block';
     seeNot.style.display = 'none';
    }
    else{
        seeNot.style.display = 'block';
        seeYes.style.display = 'none';
    }
}