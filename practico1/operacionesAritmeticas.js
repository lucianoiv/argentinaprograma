let num1 = 15;
let num2 = 7;
let num3 = 8;
let num4 = 10; //variables

let resultado1 = num1+num2; //suma
let resultado2 = num4-num3; //resta

let resultadoFinal = resultado1*resultado2; //multiplicacion de resultados

let esPar = resultadoFinal % 2 === 0; //devuelve True si resultado final es par

console.log("Mis variables iniciales fueron: "+num1+", "+num2+", "+num3+" y "+num4+". La respuesta a verificar si el resultado final es par es: "+esPar)