document.addEventListener('DOMContentLoaded', ()=>{

    function calc(){

        var x = parseFloat(document.getElementById('#number1').value);
        var y = parseFloat(document.getElementById('#number2').value);            
        var opr = document.getElementsByClassName('.operators').value;

        if(opr === "plus"){
            var el1 = document.getElementById('#plus').addEventListener( 'click', () => {
                document.getElementById('#total').innerHTML = x + y;
            });
        }
        else if(opr === "minus"){
            var el2 = document.getElementById('#minus').addEventListener( 'click', () => {
                document.getElementById('#total').innerHTML = x - y;
            });
        }
        else if(opr === "multi"){
            var el3 = document.getElementById('#multi').addEventListener( 'click', () => {
                document.getElementById('#total').innerHTML = x * y;
            });
        }
        else if(opr === "divide"){
            var el4 = document.getElementById('#divide').addEventListener( 'click', () => {
                document.getElementById('#total').innerHTML = x % y;
            });
        }

        return false;
    }

    calc();
});
