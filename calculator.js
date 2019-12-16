document.addEventListener('DOMContentLoaded', ()=>{
        
        calculate.addEventListener('click', () => {

            let x = parseInt(number1.value);
            let y = parseInt(number2.value);

            alert("Number 1 value is:" + " " + x);
            alert("Number 2 value is:" + " " + y);    

        });

        let opr = document.querySelectorAll('.operators button');       

        //console.log(opr);        
        //opr.forEach(element => console.log(element.value));

        opr.forEach(element => element.addEventListener('click', ()=>{

            let x = parseInt(number1.value);
            let y = parseInt(number2.value);
            
            switch(element.value){
                case "plus":
                    document.getElementById('total').innerHTML = x + y;
                    break;
                case "minus":
                    document.getElementById('total').innerHTML = x - y;
                    break;
                case "multi":
                    document.getElementById('total').innerHTML = x * y;
                    break;
                case "divide":
                    document.getElementById('total').innerHTML = x / y;
                    break;
            }
        }));
    
});
