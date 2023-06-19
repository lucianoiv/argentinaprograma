const readlineSync = require('readline-sync');
const numEntero = readlineSync.question('Ingresa un numero entero: ');

if (numEntero > 0 && numEntero % 2 === 0){      //si el numero es mayor a 0, Y, su resto es cero, muestra este mensaje.
    console.log("El número es positivo y par.");
} else if (numEntero > 0 && numEntero % 2 !== 0){   //si es mayor a cero, Y, su resto es distinto a cero muestra este mensaje
    console.log("El numero es positivo e impar.");
} else if (numEntero < 0){
    console.log("El número es negativo.")// si el numero es menor a cero muestra este mensaje
} else {
    console.log("El número es cero.");//si ninguna de las condiciones anteriores se cumple muestra este mensaje
}