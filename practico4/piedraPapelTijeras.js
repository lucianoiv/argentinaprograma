const readlineSync = require('readline-sync'); //ESCRIBI LOS COMENTARIOS A LA DERECHA Y EN UNA MISMA COLUMNA para que se interprete mejor

function obtenerJugadaComputadora(){    // funcion para obtener la jugada aleatoria de computadora
    x = Math.floor(Math.random()*3);    //  multiplica por tres para que el devuelva siempre 1,2 o 3
    switch(x){                          // 
        case 0:                         //
            x = "piedra";               //
            break;                      //
        case 1:                         // switch que convierte el valor aleatorio a una opcion string
            x = "papel";                //
            break;                      //
        case 2:                         
            x = "tijeras";
            break;
    }
    return x;
}

function obtenerJugadaUsuario(){                                                            //funcion para obtener jugada de usuario, tiene un parametro que es lo que el usuario tipea
    let opcion1 = readlineSync.question('Elige una opcion: piedra, papel o tijeras: ');     //
    opcion1 = opcion1.toLocaleLowerCase();                                                  //cambio a minuscula
if (opcion1 == "piedra" || opcion1 == "papel" || opcion1 == "tijeras"){                     // si el usuaria escribe correctamente devuelve esto
    return opcion1;                                                                         //
} else                                                                                      //
while (opcion1 != "piedra" || opcion1 != "papel" || opcion1 != "tijeras"){                  //si el usuario ingresa algo diferente a las opciones devuelve esto
        console.log("...No es una opcion correcta, elige de nuevo...");                     //Es un loop que se ejecuta mientras el usuario no escribe opciones validas
        let opcion2 = readlineSync.question('Elige una opcion: piedra, papel o tijeras: '); //
        opcion1 = opcion2.toLocaleLowerCase();                                              //
        if (opcion1 == "piedra" || opcion1 == "papel" || opcion1 == "tijeras"){             //Una vez ingresada una opcion valida ejecuta esta ultima parte
            return opcion1;
        }
    }
}

function determinarGanador(jugador,computadora){                                        // funcion que determina el ganador con dos parametros
    if (jugador === computadora){                                                       // "jugador" es el parametro que tipea el usuario, 
        console.log(`La computadora eligio ${computadora}.`);                           // y "computadora" es la opcion aleatoria.
        console.log(`El usuario eligio ${jugador}`);                                    // Por cada opcion hay dos resultados por lo que use solo ELSE IF.
        console.log(`El resultado es: Empate`);                                         //
        return 0;                                                                       // Cada opcion devuelve un valor 0, 1, -1
        } else if (jugador == "piedra" && computadora == "papel"){                      // Estos valores son sumados a una variable para devolver un resultado
        console.log(`La computadora eligio ${computadora}.`);                           // en el caso de que sean varias jugadas.(linea 94)
        console.log(`El usuario eligio ${jugador}`);                                    // cuando el usuario gana suma +1
        console.log(`El resultado es: Gana la computadora`);                            // cuando gana la computadora resta -1
        return -1;                                                                      // cuando es empata suma 0.
            } else if (jugador == "piedra" && computadora == "tijeras"){
            console.log(`La computadora eligio ${computadora}.`);
            console.log(`El usuario eligio ${jugador}`);
            console.log(`El resultado es: Gana el usuario`);
            return 1;
                } else if (jugador == "papel" && computadora == "piedra"){
                console.log(`La computadora eligio ${computadora}.`);
                console.log(`El usuario eligio ${jugador}`);
                console.log(`El resultado es: Gana el usuario`);
                return 1;
                     } else if (jugador == "papel" && computadora == "tijeras"){
                    console.log(`La computadora eligio ${computadora}.`);
                    console.log(`El usuario eligio ${jugador}`);
                    console.log(`El resultado es: Gana la computadora`);
                    return -1;
                        } else if (jugador == "tijeras" && computadora == "piedra"){
                        console.log(`La computadora eligio ${computadora}.`);
                        console.log(`El usuario eligio ${jugador}`);
                        console.log(`El resultado es: Gana la computadora`);
                        return -1;
                            } else if (jugador == "tijeras" && computadora == "papel"){
                            console.log(`La computadora eligio ${computadora}.`);
                            console.log(`El usuario eligio ${jugador}`);
                            console.log(`El resultado es: Gana el usuario`);
                            return 1;
                            }
    
}

console.log("*********************")                // Esto es lo primero que se ve al ejecutar el codigo
console.log("* Elige el juego    *")                //
console.log("* 1. Una Jugada.    *")                //
console.log("* 2. Dos Jugadas.   *")                //
console.log("* 3. Tres Jugadas.  *")                //
console.log("*********************")                //
let ganador = 0;                                    // La variable "ganador" para cuando se eligen varias jugadas
let jugadas = 0;                                    // "jugadas" declara la variable. 

do{                                                                                       // DO WHILE para pedir que ingrese cantidad de jugadas    
    jugadas = +readlineSync.questionInt('Elige cantidad de jugadas: ',{defaultInput: 1}); // questionInt para que solo pueda escribir un entero, default:1 cuando presiona ENTER sin escribir
} while(jugadas <= 0 || jugadas >= 4);                                                    // una condicion para que no pueda ingresar un numero diferente a 1,2 o 3

for (let i = 1; i <= jugadas;i++){                      // un FOR para repetir el juego dependiendo la cantidad de veces que eligio el usuario.
    let jugador = obtenerJugadaUsuario();               
    let computadora = obtenerJugadaComputadora();       
    ganador += determinarGanador(jugador,computadora);  
}

if(ganador === 0){                              // Resultado final. Para decidir quien es el ganador despues de varias jugadas
    console.log("***EMPATE***");                // 
} else if (ganador > 0){                        // de acuerdo a la cantidad de veces que el usuario gana, pierde o empata,
    console.log("***GANA EL USUARIO***");       // muestra por consola el mensaje que corresponde.
} else if (ganador < 0){
    console.log("***GANA LA COMPUTADORA***");
}                                               //GRACIAS POR LA ATENCION!! NOS VEMOS LA PROXIMA!!