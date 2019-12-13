document.addEventListener('DOMContentLoaded', ()=>{

    function calc(){

        var x = parseFloat(document.getElementById('number1').value);
        var y = parseFloat(document.getElementById('number2').value);            
        var opr = document.getElementsByClassName('operators').value;

        if(opr === "plus"){
            var el1 = document.getElementById('plus');
            el1.addEventListener('click', ()=>{
                document.getElementById('total').innerHTML = x + y;
            });
        }
        else if(opr === "minus"){
            document.getElementById('total').innerHTML = x - y;
        }
        else if(opr === "multi"){
            document.getElementById('total').innerHTML = x * y;
        }
        else if(opr === "divide"){
            document.getElementById('total').innerHTML = x % y;
        }

        return false;
    }
});
