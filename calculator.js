document.addEventListener('DOMContentLoaded', ()=>{

        let opr = document.querySelectorAll('.operators button');

        opr.forEach(element => element.addEventListener('click', () => {

            let x = parseInt(document.querySelector('#number1').value); //type: number
            let y = parseInt(document.querySelector('#number2').value); //type: number
            let totalElement = document.querySelector('#total'); //type: object
            let calculateElement = document.querySelector('#calculate'); //type: object           
            
            calculateElement.addEventListener('click', () => {
            
                 switch(element.value){
                        case "plus":
                            totalElement.innerHTML = x + y;
                            break;
                        case "minus":
                            totalElement.innerHTML = x - y;
                            break;
                        case "multi":
                            totalElement.innerHTML = x * y;
                            break;
                        case "divide":
                            totalElement.innerHTML = x / y;
                            break;
                        default:
                            break;
                  };     

            });
            
        }));  
});
