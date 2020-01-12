import{selectOperation} from './selectOperation';
import{calculateTotal} from './calculateTotal';

//Variabili, sono indipendenti ma da loro dipende la funzione init
export let operatorSelected;
export let n1Element;
export let n2Element;
export let totalElement;
export let btns;
export let calculateElement;

export function selectElement(element) {   
    element.classList.add('selected');
    operatorSelected = element.value;
}

//Nome file: init
//Dipende dalle variabili in alto, da "btns", da "selectOperation", da "selectElement" e  "calculateTotal"
export function init() {
    n1Element = document.querySelector('#number1');
    n2Element = document.querySelector('#number2');
    totalElement = document.querySelector('#total');
    calculateElement = document.querySelector('#calculate');
  
    btns = document.querySelectorAll('.operators button');
    btns.forEach((btn) => btn.addEventListener('click', selectOperation));
  
    calculateElement.addEventListener('click', () => {
      totalElement.innerText = calculateTotal(n1Element.value, n2Element.value);
    });

    selectElement(btns[0]);
}