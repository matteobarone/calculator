document.addEventListener('DOMContentLoaded', ()=>{
        
        calculate.addEventListener('click', () => {

            let x = parseInt(number1.value);
            let y = parseInt(number2.value);

            console.log("Number 1 value is:" + " " + x);
            console.log("Number 2 value is:" + " " + y);    

        });
    
        plus.addEventListener( 'click', function(){
            let x = number1.value;
            let y = number2.value; 
            document.getElementById('total').innerHTML = (+x)+(+y);
        });

        minus.addEventListener( 'click', function(){
            let x = number1.value;
            let y = number2.value;
            document.getElementById('total').innerHTML = (+x)-(+y);
        });

        multi.addEventListener( 'click', function(){
            let x = number1.value;
            let y = number2.value;
            document.getElementById('total').innerHTML = x * y;
        });

        divide.addEventListener( 'click', function(){
            let x = number1.value;
            let y = number2.value;
            let res = x / y;
            document.getElementById('total').innerHTML = res.toFixed(3);
        });
    
});
