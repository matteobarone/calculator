//le metto nel file ConstOperators
//le const sono indipendenti ma da loro dipendono altre funzioni (vedi sotto)
const OPERATORS = {
    plus: 'plus',
    minus: 'minus',
    multi: 'multi',
    divide: 'divide'
  };

  //Indipendenti, le inserisco nel file init
  let operatorSelected;
  let n1Element;
  let n2Element;
  let totalElement;
  let btns;
  let calculateElement;
  
  //Nome file: index
  //Dipende solo da "init"
  document.addEventListener('DOMContentLoaded', () => init());
  
  //Nome file: init
  //Dipende dalle variabili in alto, da "btns", da "btnClick", da "selectElement" e  "calculateTotal"
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
  
  //Nome file: btnClick
  //Dipende da "deselectAllBtn" e "selectElement"
  function btnClick(e) {
    deselectAllBtn();
    selectElement(e.target);
  }
  
  //Nome file: deselectAllBtn
  //Dipende solo da "btns"
  function deselectAllBtn() {
    btns.forEach((btn) => btn.classList.remove('selected'));
  }
  
  //Nome file: selectElement
  //Dipende da "operatorSelected", presente e definita in "init"
  function selectElement(element) {
    element.classList.add('selected');
    operatorSelected = element.value;
  }
  
  //Nome file: calculateTotal
  //Dipende solo da "getOperation"
  function calculateTotal(value1, value2) {
    if (value1 === '' || value2 === '') {
      return '--';
    }
  
    const n1 = parseInt(value1);
    const n2 = parseInt(value2);
  
    return getOperation(n1, n2)
  }
  
  //Nome file: getOperation
  //Dipende da "operatorSelected", presente e definita in "init"
  //Dipende dagli operatori, definiti in ConstOperators
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