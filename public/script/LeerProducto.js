/**
 * Realiza una solicitud AJAX utilizando jQuery para obtener todos los productos del servidor.
 */
function obtenerProductos() {
    $.ajax({
        url: "http://localhost/proyectos/PERSONAL_POSTMAN_Productos/controller/producto.php?op=GetAllProducto",
        method: "GET",
        dataType: "json",
        success: function(Productos) {
            // Manipular los datos recibidos
            mostrarProductos(Productos);
        },
        error: function(xhr, status, error) {
            console.error("Error al obtener los productos:", error);
        }
    });
}

/**
 * Muestra los productos en la página HTML.
 * @param {Array} Productos - Un array de objetos que representan los productos.
 */
function mostrarProductos(Productos) {
    var resultadoDiv = $("#resultadoproductos");
    resultadoDiv.empty(); // Limpiar contenido anterior

    // Crear elementos HTML para cada producto y agregarlos al contenedor
    Productos.forEach(function(producto) {
        var productoItem = $("<div>").text(producto.pro_nom);
        resultadoDiv.append(productoItem);
    });
}

// Añadir un evento para ejecutar mostrarProductos al cargar la vista
$(document).ready(function() {
    obtenerProductos();
});




