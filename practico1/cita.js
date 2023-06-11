let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamanioDeCita = cita.length;
let indice = cita.indexOf("tigres comen trigo");
let citaRevisada = cita.slice(0, 31);

console.log("El tamaño de la cita es: "+tamanioDeCita);
console.log("El indice del substring es: "+indice);
console.log(citaRevisada);