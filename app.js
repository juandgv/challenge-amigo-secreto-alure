// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Capturar el valor de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value;

    // Validación del campo y actualización del array
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
    }

    // Limpiar el campo
    let limpiarCampo = document.getElementById('amigo');
    limpiarCampo.value = "";

    // Actualizar la lista después de añadir un amigo
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Recorrer el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) { 
        const elementoLista = document.createElement('li');
        
        // Asignar el nombre del amigo al <li>
        elementoLista.innerHTML = amigos[i];
        
        // Agregar el <li> al <ul>
        listaAmigos.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Por favor, añade al menos un nombre.");
        return; // Salir si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    const elementoResultado = document.getElementById('resultado');
    if (elementoResultado) {
        elementoResultado.innerHTML = "El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
    } else {
        alert("El elemento de resultado no se encuentra en la página.");
    }
}




