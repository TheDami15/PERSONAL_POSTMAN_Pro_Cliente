/**
 * Maneja el envío del formulario de producto y realiza una solicitud POST al servidor para insertar un nuevo producto.
 * @param {Event} event - El evento de envío del formulario.
 */
document.getElementById('formulario-producto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtiene los valores de los campos del formulario
    const nombreProducto = document.getElementById('nombre-producto').value;
    const descripcionProducto = document.getElementById('descripcion-producto').value;
    const idCategoria = document.getElementById('id-producto').value;

    /**
     * Objeto que contiene los datos del nuevo producto.
     * @type {Object}
     * @property {string} pro_nom - El nombre del producto.
     * @property {string} pro_obs - La descripción del producto.
     * @property {string} cat_id - El identificador de la categoría del producto.
     */
    const datos = {
        pro_nom: nombreProducto,
        pro_obs: descripcionProducto,
        cat_id: idCategoria
    };
  
    // URL de la solicitud
    const url = 'http://localhost/proyectos/PERSONAL_POSTMAN_Productos/controller/producto.php?op=InsertProducto';
  
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
            mostrarProductosFunction();
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
 * Llama a la función para mostrar los productos después de haber insertado un nuevo producto.
 */
function mostrarProductosFunction() {
    obtenerProductos(); // Llama a la función para obtener y mostrar los productos
}


