const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingresa un numero: ');

if (num > 0){ //si el numero ingresado es mayor a cero, muestra este mensaje
    console.log("El número es positivo");
} else if (num < 0){//si el numero ingresado es menor a cero, muestra este mensaje
    console.log("El número es negativo");
} else {
    console.log("El número es cero");//si ninguna de las condiciones anteriores se cumple, muestra este mensaje
}