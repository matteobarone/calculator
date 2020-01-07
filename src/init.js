import { btnClick } from './btnClick';
import { selectElement } from './func3';

export let operatorSelected;  
export let n1Element;
export let n2Element;
export let totalElement;
export let btns;
export let calculateElement;

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