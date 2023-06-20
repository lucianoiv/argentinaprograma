//crea lista de invitados
personas = ["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
admitidos = [];//listas vacias de admitidos y rechazados.
rechazados = [];

for (let i = 0; i < personas.length; i++){;//contador comienza en posicion cero de array e itera a lo largo
    if (personas[i] == "Jose" ||personas[i] == "Sofia"){
        rechazados.push(personas[i]);//si la persona es Jose o Sofia los agrega a [rechazados]
    } else {
        admitidos.push(personas[i])//al resto de personas las agrega a [admitidos]
    }
}
admitidos.sort();//metodo .sort para ordenar alfabeticamente ambas listas.
rechazados.sort();

//console.log antes del bucle para que lo muestre una vez
console.log("La lista ordenada de invitados admitidos es:")
for (i of admitidos){
    console.log(i);//muestra lista ordenada de admitidos. Uno en cada parrafo.
}
console.log("La lista ordenada de invitados rechazados es:")
for (i of rechazados){
    console.log(i);//muestra lista ordenada de rechazados. Uno en cada parrafo.
}