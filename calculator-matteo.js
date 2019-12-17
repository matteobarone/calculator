const OPERATORS = {
    plus: 'plus',
    minus: 'minus',
    multi: 'multi',
    divide: 'divide'
  };
  let operatorSelected;
  
  let n1Element;
  let n2Element;
  let totalElement;
  let btns;
  let calculateElement;
  
  document.addEventListener('DOMContentLoaded', () => init());
  
  function init() {
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
  }
  
  function btnClick(e) {
    deselectAllBtn();
    selectElement(e.target);
  }
  
  function deselectAllBtn() {
    btns.forEach((btn) => btn.classList.remove('selected'));
  }
  
  function selectElement(element) {
    element.classList.add('selected');
    operatorSelected = element.value;
  }
  
  function calculateTotal(value1, value2) {
    if (value1 === '' || value2 === '') {
      return '--';
    }
  
    const n1 = parseInt(value1);
    const n2 = parseInt(value2);
  
    return getOperation(n1, n2)
  }
  
  function getOperation(n1, n2) {
    switch(operatorSelected) {
      case OPERATORS.plus:
        return n1 + n2;
      case OPERATORS.minus:
        return n1 - n2;
      case OPERATORS.multi:
        return n1 * n2;
      case OPERATORS.divide:
        return n1 / n2;
      default:
        return;
    }
  }