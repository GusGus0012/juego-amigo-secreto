// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista para almacenar los nombres de los amigos

function LimpiarCajaTexto() {
    document.getElementById('amigo').value = ''; // Limpia el input del usuario
    document.querySelector('#amigo').focus(); // Enfoca el input para que el usuario pueda ingresar un nuevo nombre
    //El # indica al querySelector que se trata de un ID
}
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista donde se mostrarán los amigos
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla
    amigos.forEach(function(nombreAmigo) {
        let li = document.createElement('li'); // Crea un nuevo elemento li para cada amigo
        li.textContent = nombreAmigo; // Añade el nombre del amigo a la lista
        listaAmigos.appendChild(li); // Añade el elemento li a la lista
    });
}
function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;  // Variable para almacenar el nombre del amigo agregado
    if (amigoAgregado.trim() === '') { // Verifica si el input está vacío o solo contiene espacios
        alert("Por favor, inserte un nombre."); // Mensaje de error si el nombre está vacío o solo contiene espacios
        return LimpiarCajaTexto(); // Sale de la función y limpia la casilla si el nombre está vacío
    }
    else if (amigos.includes(amigoAgregado)) {
        alert("El nombre ya existe. Por favor, inserte un nombre diferente."); // Mensaje de error si el nombre ya existe
        return LimpiarCajaTexto(); // Sale de la función y limpia la casilla si el nombre ya existe
    }
    else {
        amigos.push(amigoAgregado); // Añade el nombre a la lista de amigos
        LimpiarCajaTexto(); // Limpia el input del usuario
        actualizarListaAmigos(); // Actualiza la lista de amigos en la interfaz
    }
}
function sortearAmigo() {
    let maximo = amigos.length - 1; // Calcula el índice máximo basado en la cantidad de amigos
    let minimo = 0; // El índice mínimo siempre será 0
    let nuevoNumero; // Variable para almacenar el número aleatorio generado
    if (amigos.length < 2) {
        alert("Por favor, agregue al menos dos amigos para realizar el sorteo."); // Mensaje de error si hay menos de dos amigos ya que no tendría sentido sortear
        return;
    }
    nuevoNumero = Math.floor((Math.random() * ((maximo + 1) - minimo) + minimo)); // Genera un número secreto aleatorio entre el mínimo y el máximo ingresados por el usuario
    let resultado = document.getElementById('resultado'); // Obtiene el elemento donde se mostrará el resultado del sorteo
    resultado.innerHTML = amigos[nuevoNumero]; // Muestra el nombre del amigo seleccionado aleatoriamente en el elemento resultado
}