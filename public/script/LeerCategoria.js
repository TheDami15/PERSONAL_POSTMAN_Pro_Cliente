/**
 * Realiza una solicitud AJAX para obtener todas las categorías del servidor.
 */
function obtenerCategorias() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Manipular los datos recibidos
            var categorias = JSON.parse(this.responseText);
            mostrarCategorias(categorias);
        }
    };
    xhttp.open("GET", "http://localhost/proyectos/PERSONAL_POSTMAN_Productos/controller/categoria.php?op=GetAll", true);
    xhttp.send();
}

/**
 * Muestra las categorías en la página HTML.
 * @param {Array} categorias - Un array de objetos que representan las categorías.
 */
function mostrarCategorias(categorias) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar contenido anterior

    // Crear elementos HTML para cada categoría y agregarlos al contenedor
    categorias.forEach(function(categoria) {
        var categoriaItem = document.createElement("div");
        categoriaItem.textContent = categoria.cat_nom;
        resultadoDiv.appendChild(categoriaItem);
    });
}

// Añadir un evento para ejecutar mostrarCategorias al cargar la vista
window.addEventListener('DOMContentLoaded', function() {
    obtenerCategorias();
});



    
