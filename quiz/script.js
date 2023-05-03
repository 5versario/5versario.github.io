//Array respuestas correctas
let correctas = [2, 3, 2, 1, 2, 1, 2, 4];

//Array respuestas usuario
let opcion_elegida = [];

let cantidad_correctas = 0;

//Función que toma el número de la pregunta y el input elegido
function respuesta(num_pregunta, seleccionada) {
    //Guarda la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //Color blanco
    //Fondo de los inputs cuando se elige otra opción
    //Crea el id para seleccionar el section
    id = "p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "transparent";
    labels[5].style.backgroundColor = "transparent";
    labels[7].style.backgroundColor = "transparent";

    //Colorea el label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//Función comparar arrays
function corregir() {
    cantidad_correctas = 0;
    for (i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;
        }
    }



    alert("Vaya telaaa, has acertado " + cantidad_correctas + " preguntas. Vamos con el siguiente juego, click en Aceptar!!!");
    redirigir();
}

function redirigir() {
    // Redirige a otra página dentro del mismo proyecto
    window.location.href = "../busqueda/index.html";
}