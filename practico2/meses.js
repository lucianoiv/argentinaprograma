//crea lista de meses
let meses = {1:"enero",2:"febrero",3:"marzo",4:"abril",5:"mayo",6:"junio",7:"julio",8:"agosto",9:"septiembre",10:"octubre",11:"noviembre",12:"diciembre"};

let cantidadDeDias = ""; //crea variable de cantidad de dias con string vacio

const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero de 1 a 12: ');

if (numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 8 || numero == 10 || numero == 12){
    cantidadDeDias = "31" //si el numero ingresado es uno de los siguientes modifica la variable
} else if (numero == 4 || numero == 6 || numero == 9 || numero == 11){
    cantidadDeDias = "30" //uso OR en cada mes para que evalue cual corresponde 
} else if (numero == 2){
    cantidadDeDias = "28"//en el caso de febrero uso un else if adicional ya que es el unico con solo 28 dias
}//no agregue un else final ya que de ingresar un numero NO LISTADO imprimiria por consola lo que esta en el else

//imprime por consola la propiedad del objeto de acuerdo al numero ingresado y la variable cantidad de dias modificada
console.log(`La cantidad de días del mes de ${meses[numero]} es de ${cantidadDeDias}`);