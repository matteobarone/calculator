document.addEventListener('DOMContentLoaded', ()=>{

    function add() {
        var x = parseInt(document.getElementById('number1').value);
        var y = parseInt(document.getElementById('number2').value);

        document.getElementById('total').innerHTML = x + y;
        return false;
    }

    function subtract() {
        var x = parseInt(document.getElementById('number1').value);
        var y = parseInt(document.getElementById('number2').value);

        document.getElementById('total').innerHTML = x - y;
        return false;
    }

    function multiply() {
        var x = parseInt(document.getElementById('number1').value);
        var y = parseInt(document.getElementById('number2').value);

        document.getElementById('total').innerHTML = x * y;
        return false;
    }

    function divide() {
        var x = parseInt(document.getElementById('number1').value);
        var y = parseInt(document.getElementById('number2').value);

        document.getElementById('total').innerHTML = x % y;
        return false;
    }

    var el0 = document.getElementById('plus');
    var el1 = document.getElementById('minus');
    var el2 = document.getElementById('multi');
    var el3 = document.getElementById('divide');

    el0.addEventListener('click', add);
    el1.addEventListener('click', subtract);
    el2.addEventListener('click', multiply);
    el3.addEventListener('click', divide);

});
