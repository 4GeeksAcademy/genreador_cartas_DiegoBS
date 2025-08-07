const arrNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const arrSuits = ["♦", "♥", "♠", "♣"]

// Se crean los elementos <p> donde irá el contenido
let elemSuitContainerTop = document.createElement("p");
let elemSuitContainerBottom = document.createElement("p");
let elemNumberContainer = document.createElement("p");

// Función para que se añada contenido a los <p> creados previamente
function generateCard() {
    function funRandomNumber(arrParam) {
        const index = Math.floor(Math.random() * arrParam.length)
        return arrParam[index];
    }

    // Se elige de forma aleatoria un número y símbolo de palo y se asigna a los contenedores
    const randomNumber = funRandomNumber(arrNumber);
    elemNumberContainer.innerHTML = randomNumber;

    const randomSuit = funRandomNumber(arrSuits);
    elemSuitContainerTop.innerHTML = randomSuit;
    elemSuitContainerBottom.innerHTML = randomSuit;

    // Comprueba si sale un palo que debería de ser color rojo, y si es así, añade el .style.color ="red"  al contenedor
    if (randomSuit === "♦" || randomSuit === "♥") {
        elemSuitContainerTop.style.color = "red";
        elemSuitContainerBottom.style.color = "red";
    } else {
        elemSuitContainerTop.style.color = "black";
        elemSuitContainerBottom.style.color = "black";
    }

    // Se seleccionan los div con las clases específicas donde se insertarán los contenedores
    const divCardSuitTop = document.querySelector('div.cardTopLeft');
    divCardSuitTop.appendChild(elemSuitContainerTop);
    const divCardSuitBottom = document.querySelector('div.cardBottomRight');
    divCardSuitBottom.appendChild(elemSuitContainerBottom);

    const divCardNumber = document.querySelector('div.cardCenter');
    divCardNumber.appendChild(elemNumberContainer);
}

// Función cartas en intervalo de tiempo (y cambiar texto del botón)
let state = null;
//  let buttonText = document.getElementById("intervalButton").innerHTML = "Prueba2";

function temporizedCard() {
    if (state === null) {
        state = setInterval(generateCard, 200);
        document.querySelector(".intervalButton").textContent = "Intervalo ON"  // --------------------- IMPORTANTE QUERY SELECTOR LLAMA LA CLASE (.intervalButton) HACE FALTA EL PUNTOOOOOOO--------------------
    } else {
        clearInterval(state);
        state = null;
        document.querySelector(".intervalButton").textContent = "Intervalo OFF"
    }
}


// const sliderWidth = document.getElementById("cardWidth");

// Funciones para aumentar el tamaño de la carta con slider
// La primera función (width) se le pasa directamente el elemento DOM a la función (document.getElementById(...)...)
document.getElementById("cardWidth").addEventListener("input", (event) => {
    // let valor = sliderWidth.value;
    let valor = document.getElementById("cardWidth").value;
    let cardWidth = document.querySelector(".card");
    cardWidth.style.width = String(valor) + "px";
});

// La segunda función guarda el elemento DOM dentro de una variable (slider.Height.addEventListener(...))
const sliderHeight = document.getElementById("cardHeight");

sliderHeight.addEventListener("input", (event) => {
    let valor = sliderHeight.value;
    let cardHeight = document.querySelector(".card");
    cardHeight.style.height = String(valor) + "px";
});

window.onload = generateCard