let numeroSecreto = 0;  //=generarNumeroSecreto();
let intentos = 0; //= 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `"Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}.`);
        //Se habilitará el botón nuevo juego, una vez dinalizado el juego actual, se quitará el función de disabled para habilitar el botón y el sistema creará un nuevo número aleatorio

        document.getElementById("reiniciar").removeAttribute("disabled");

        //El usuario no acertó.
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
/* se usará el document.querySelector () pero con ID, recordar que getElementById(), se usó para
optener el valor cuardado en valorUsuario, en este caso se retoma el document.querySelector por Id para saber que tambien es posible por este comando, sin embargo de le debe poner el # para que sepa de es el Id el que se está solicitando.*/

function limpiarCaja() {
    /*let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
    Ojo otra forma de limpiar la caja y reducir el código es la siguiente:*/    
   document.querySelector("#valorUsuario").value = "";  
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Iniciar mensaje de intervalo de números
    //Generar el númeoro aleatorio
    //Inicializar el número intentos
    condicioneIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function condicioneIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indique un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function asignarTextoElemento(elemento, texto) {
    let elementoMTML = document.querySelector(elemento);
    elementoMTML.innerHTML = texto;
    return;
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //preguntar si ya se sortearon todos los número 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles.")
        
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

condicioneIniciales();


