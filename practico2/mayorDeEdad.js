const readlineSync = require('readline-sync');
const edad = readlineSync.question('Ingresa tu edad: ');

if (edad >= 18){ //si el numero ingresado es mayor o igual a 18, muestra este mensaje
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");//si la condicion primera no se cumple, muestra este mensaje
}