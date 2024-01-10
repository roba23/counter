document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
document.getElementById('decrementBtn').addEventListener('click', decrementCounter);
document.getElementById('resetBtn').addEventListener('click',  resetCounter);

const display = document.getElementById('counterDisplay');
let counterValue = 0;

function updateDisplay(){
    display.textContent = counterValue;
}


function incrementCounter(){
    counterValue++;
    updateDisplay();
}


function decrementCounter(){
    if (counterValue > 0){
        counterValue--;
    }
   
    updateDisplay();
}


function resetCounter(){
    counterValue = 0;
    updateDisplay();

}