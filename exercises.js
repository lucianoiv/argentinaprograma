//-----------------------   1              ----------------------
//MUESTRA CUAL ES EL NUMERO MAS ALTO
///let num1 = 20;
//let num2 = 100;
//if (num1 > num2){
//    console.log("num1 is greater than num2");
//}
//else {
//    console.log("num2 is greater than num1")
//}
//-----------------------   2    ----------------------------------------
//MUESTRA TODOS LOS ELEMENTOS DEL ARRAY
//let myArray = [5,10,15,20,25,30]

//for (let x of myArray){
//    console.log(x)
//}
//-------------------------   3   ---------------------------------------
//CAMBIA A MAYUSCULAS
//let myString = "luciano nahuel arrieta";
//myString = myString.toUpperCase();
//console.log(myString);
//-------------------------   4   ----------------------------------------
//SWITCH STATEMENT EVALUAR CUAL ES EL CASO
/*let num = 1; 
switch (num) {   //EL VALOR DE LA VARIABLE DEBE SER IGUAL AL CASE
    case 1:
        num = "ONE";
        break;
    case 2:
        num = "TWO";
        break;
    case 3:
        num = "THREE"
        break;
    default:
        num = "OTHER"
        break;
} console.log(num);*/
//----------------------------   5   ---------------------------------------
//UNIR STRINGS EN ARRAY 
/*let myArray = ["luciano","nahuel","arrieta"]
myArray = myArray.join("*");    //se puede asignar el separador dentro del parametro del join
console.log(myArray);*/
//------------------------------    6   ---------------------------------------
//FOR para mostrar numeros hasta alcanzar el numero de la variable
/*let num = 7;
for (x = 0; x < num;x++){ //(valor de x ; condicion; esto hace al final de todo)
    console.log(x)
}*/
//------------------------------   7  ---------------------------------------
//MOSTRAR UN CARACTER DE UN STRING
/*let text = "luciano"
text = text.charAt(2);
console.log(text);*/
//--------------------   8   ------------------------------------
// SUMA TODOS LOS ELEMENTOS DEL ARRAY
/*let numbers = [1,2,3,4,5];
numbers = numbers.reduce(myfunction);

function myfunction (total,num) {
    return total + num;
} console.log(numbers);*/
//-------------------9 -------------------------------------
//iterar dentro de objetos
/*let myObject = {nombre:"luciano",apellido:"arrieta",edad:"36"}
for(x in myObject){
    console.log(myObject[x]);
}*/
//----------------------10 -------------------------------
//mostrar valor par mientras la variable sea menor.
/*let num1 = 20;
let num2 = 0;
while (num2 < num1){
    num2 += 2;
    console.log(num2);
}*/
//--------------------------------------------------
//PROMEDIO USANDO BUCLE
/*let promedio = [3.2,4.5,6.4,7.9,10.4,12.4]
let resultado = 0;
for (x of promedio){
    resultado = resultado + x;
} 
resultado = resultado / 6
console.log(resultado)*/
//------------    CLASE 27 DE MAYO -------------------------------------------
/*Queremos representar un equipo de fútbol 5. Para ello necesitamos tener el nombre 
de cada jugader, su posición (arco, defensa, mediocampo, adelante) y su edad. 
¿Cómo representamos cada jugador? 
¿Cómo representamos un equipo? 
¿Cómo representamos los 8 equipos que juegan el torneo?*/

let jugador1 = {
    nombre: "jugador1",
    posicion: "arco",
    edad: 35
}

let jugador2 = {
    nombre: "jugador2",
    posicion: "delantero",
    edad: 22
}
let jugador3 = {
    nombre: "jugador3",
    posicion: "arco",
    edad: 33
}

let jugador4 = {
    nombre: "jugador4",
    posicion: "delantero",
    edad: 44
}
let equipo1 = [jugador1, jugador2];  //equipos
let equipo2 = [jugador3, jugador4];

let torneo = [equipo1,equipo2]; //torneo con equipos dentro

console.log(torneo);