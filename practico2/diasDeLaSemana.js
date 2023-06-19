const readlineSync = require('readline-sync');
let dia = readlineSync.question('Ingresa un numero de 1 a 7: '); //definir con let para poder modificar

dia = Number(dia); //convierte el valor ingresado por el usuario (string), a un numero.
                   //otra forma de hacerlo seria escribiendo case "1",(como string), sino el case no lo toma

switch (dia) {
    case 1:
        dia = "Hoy es lunes";
        break;
    case 2:
        dia = "Hoy es martes"; //cada CASE modifica la variable {dia}
        break;
    case 3:
        dia = "Hoy es miércoles";
        break;
    case 4:
        dia = "Hoy es jueves";
        break;
    case 5:
        dia = "Hoy es viernes";
        break;
    case 6:
        dia = "Hoy es sábado";
        break;
    case 7:
        dia = "Hoy es domingo";
        break;
    default:
        dia = "El número es invalido"; //si el numero es distito de 1-7, o vacio, muestra este mensaje
}
console.log(dia); //muestra el valor de la variable {dia} modificada.