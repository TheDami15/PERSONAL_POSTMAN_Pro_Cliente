/**
 * Maneja el envío del formulario de categoría y realiza una solicitud POST al servidor para insertar una nueva categoría.
 * @param {Event} event - El evento de envío del formulario.
 */
document.getElementById('formulario-categoria').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtiene los valores de los campos del formulario
    const nombreCategoria = document.getElementById('nombre-categoria').value;
    const descripcionCategoria = document.getElementById('descripcion-categoria').value;

    /**
     * Objeto que contiene los datos de la nueva categoría.
     * @type {Object}
     * @property {string} cat_nom - El nombre de la categoría.
     * @property {string} cat_obs - La descripción de la categoría.
     */
    const datos = {
        cat_nom: nombreCategoria,
        cat_obs: descripcionCategoria
    };
    const url = 'http://localhost/proyectos/PERSONAL_POSTMAN_Productos/controller/categoria.php?op=Insert';
    const xhr = new XMLHttpRequest(); // Crea una nueva solicitud XMLHttpRequest
  
    // Configura la solicitud
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la solicitud
  
    // Maneja la respuesta del servidor
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // La solicitud fue exitosa
            console.log(xhr.responseText); // Suponiendo que el servidor devuelve el mensaje de éxito

            // Llama a la función para mostrar productos
            mostrarCategoriasFunction();
        } else {
            // La solicitud falló
            console.error('La solicitud falló');
        }
    };
  
    // Maneja errores
    xhr.onerror = function() {
        console.error('Error en la solicitud');
    };
  
    // Envía la solicitud con los datos del formulario
    xhr.send(JSON.stringify(datos));
});

/**
 * Llama a la función para mostrar las categorías después de haber insertado una nueva categoría.
 */
function mostrarCategoriasFunction() {
    obtenerCategorias(); // Llama a la función para obtener y mostrar las categorías
}

