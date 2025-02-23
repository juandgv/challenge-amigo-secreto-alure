// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Función para agregar un nombre a la lista
// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
  
    // Validación del nombre
    if (nombre === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
  
    // Crear el <li>
    const li = document.createElement("li");
    li.classList.add("friend-item");
  
    // Crear un <span> para el nombre
    const spanNombre = document.createElement("span");
    spanNombre.classList.add("friend-name");
    spanNombre.textContent = nombre;
  
    // Crear el ícono de Font Awesome para eliminar (sin botón)
    const iconoEliminar = document.createElement("i");
    // Usamos la clase de la "x" (fa-times). En Font Awesome 6 es "fa-xmark", 
    // pero "fa-times" también funciona en versiones anteriores.
    iconoEliminar.classList.add("fa", "fa-times", "remove-icon");
  
    // Evento para eliminar el <li> al hacer clic en la "x"
    iconoEliminar.addEventListener("click", () => {
      li.remove();
    });
  
    // Insertar el span y el ícono en el <li>
    li.appendChild(spanNombre);
    li.appendChild(iconoEliminar);
  
    // Agregar <li> a la lista
    document.getElementById("listaAmigos").appendChild(li);
  
    // Limpiar el campo de texto y enfocar
    input.value = "";
    input.focus();
  }
  
  
  
  // Función para sortear un amigo secreto de la lista
  function sortearAmigo() {
    // Obtiene la lista de amigos (elementos <li> dentro de la lista)
    const lista = document.getElementById("listaAmigos");
    const amigos = lista.getElementsByTagName("li");
  
    // Si la lista está vacía, muestra una alerta
    if (amigos.length === 0) {
      alert("Agrega al menos un amigo antes de sortear.");
      return;
    }
  
    // Genera un índice aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio].querySelector("span").textContent;
  
    // Muestra el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia resultados previos
    const liResultado = document.createElement("li");
    liResultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
    resultado.appendChild(liResultado);
  }
  