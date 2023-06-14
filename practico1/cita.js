let cita = "Tres tristes tigres comen trigo en un trigal"; 
let substring = "tigres comen trigo";
let tamanioDeCita = cita.length; //usa length para indicar el tamaño de la cita
let indice = cita.indexOf("tigres comen trigo"); //usa indexOf para buscar el substring dentro cita
let citaRevisada = cita.slice(0, 31); //recorta la variable cita hasta el indice 31

console.log("El tamaño de la cita es: "+tamanioDeCita); //devuelve el tamaño de la cita
console.log("El indice del substring es: "+indice); //devuelve la posicion del substring (principio del substring)
console.log(citaRevisada); //devuelve cita recortada