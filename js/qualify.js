// Funciones para sección calificar

const value = document.querySelector("#value"); //value output
const input = document.querySelector("#myinput"); //qual
value.textContent = input.value;

//Lee el valor del input ingresado por el usuario

input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
})

// Añade color al input range en función del valor ingresado por el usuario (barra de progreso)

input.oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #00AD91 0%, #00AD91 ' + value + '%, #fff ' + value + '%, white 100%)';
}; 

//condicionales para escribir el texto en el DOM según calificación del usuario

function qualification(){
    let num = value.textContent;
    let text;
    switch (true){
        case num>= 0 && num<3 :
            text = "Muy deficiente";
            break;
        case num>= 3 && num<5:
            text = "Insuficiente";
            break; 
        case num>= 5 && num<6:
            text = "Suficiente" ;
            break; 
        case num>= 6 && num<7:
            text = "Bien";
            break; 
        case num>= 7 && num<9:
            text = "Notable";
            break; 
        case num>= 9 && num<=10:
            text = "Sobresaliente";
            break;   
        default: 
            text = "Ingrese un número válido";
    }
    
    if (num >= 0 && num <= 10) { // Condicional para el texto
        document.querySelector(".section__result").textContent= "Nuestro servicio está: " + text;
        document.querySelector(".section__numresult").textContent = "Tu calificación fue de: " + num;
    // } else { // Elimina el resultado anterior si se ingresa un número fuera del rango o algo que no sea un número
    //     document.querySelector(".section__numresult").textContent = "";
    //     document.querySelector(".section__result").textContent= "Ingrese un número válido";
    }
}