


function returnText(){
    let p = document.querySelector("#res");
    let x = document.getElementById("deg").value;
    x = parseInt(x);
    let choice = document.getElementsByName('unit');
    for(let radio of choice){
        if(radio.checked){
            if(radio.value == "faranite"){
                let ans = (x*1.8) + 32;
                p.innerText = ans + " fahrenheit";
            }
            else if(radio.value == "kelvin"){
                 ans = x+273.15;
                p.innerText = ans + " kelvin";
            }
        }
    }
}