import { btnClick } from '/func1.js';
import { selectElement } from '/func3.js';

let operatorSelected;  
let n1Element;
let n2Element;
let totalElement;
let btns;
let calculateElement;

export function init() {
    n1Element = document.querySelector('#number1');
    n2Element = document.querySelector('#number2');
    totalElement = document.querySelector('#total');
    calculateElement = document.querySelector('#calculate');
  
    btns = document.querySelectorAll('.operators button');
    btns.forEach((btn) => btn.addEventListener('click', btnClick));
  
    calculateElement.addEventListener('click', () => {
      totalElement.innerText = calculateTotal(n1Element.value, n2Element.value);
    });
  
    selectElement(btns[0]);
};