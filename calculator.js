document.addEventListener('DOMContentLoaded', ()=>{
    
        plus.addEventListener( 'click', function(){
            x = number1.value;
            y = number2.value; 
            document.getElementById('total').innerHTML = (+x)+(+y);
        });

        minus.addEventListener( 'click', function(){
            x = number1.value;
            y = number2.value;
            document.getElementById('total').innerHTML = (+x)-(+y);
        });

        multi.addEventListener( 'click', function(){
            x = number1.value;
            y = number2.value;
            document.getElementById('total').innerHTML = x * y;
        });

        divide.addEventListener( 'click', function(){
            x = number1.value;
            y = number2.value;
            res = x / y;
            document.getElementById('total').innerHTML = res.toFixed(3);
        });
    
});
