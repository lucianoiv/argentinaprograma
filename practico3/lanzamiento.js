for (let i = 10; i >= 0; i--){//Contador comienza en 10, y resta 1 en cada ciclo.
    if (i == 10){
        console.log("Cuenta regresiva "+i)//si el numero es igual a 10 muestra este mensaje
    } else if(i == 0){
        console.log("Lanzamiento!");//si el numero es cero, muestra este mensaje.
    }else{
        console.log(i);//para el resto de los numeros solo los muestra en consola.
    }
}