let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue= '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText=='='){
         screen.value = eval(screenvalue)

        }
        else if(buttonText=='c'){
        screenvalue='';
        screen.value = screenvalue;
            
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }

    })
}