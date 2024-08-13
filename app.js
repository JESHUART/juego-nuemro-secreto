let numeroSecreto = 0;
let intentos= 0;
let ListaDeNumerosSorteados=[];
let nuneroMaximo= 10; 

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'vez' :'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
   } else{
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    } else { 
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
}
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*nuneroMaximo)+1;
   //si el numeroe sa en  la lista 
   console.log(numeroGenerado); 
   console.log (ListaDeNumerosSorteados);
   //si ya se sorteo todos los numeros
   if(ListaDeNumerosSorteados.length == nuneroMaximo){
   asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
   } else {

   if (ListaDeNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto
   } else{
    ListaDeNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${nuneroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;}


function reiniciarJuego(){
 //limpiar caja
 limpiarCaja();
 //indicar mensaej de numeros
 //generar numero aleatorio
 //inicar el numero de intentos 
 condicionesIniciales();
 //deshabilitar del boton de nuevo juego
 document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();