let n1 = document.querySelector('#number1');
let n2 = document.querySelector('#number2');
let plus = document.querySelector('#plus');
let calculate = document.querySelector('#calculate');
let total = document.querySelector('#total');

plus.addEventListener('click', (n1, n2)=>{
  var sum = n1 + n2;
  return sum;
});

calculate.addEventListener('click', ()=>{
    console.log('Ciao');
});

console.log('Calculator');
console.log('Sharktale');
