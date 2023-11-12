document.addEventListener('DOMContentLoaded', function() {
    var secciones = document.getElementsByClassName('seccion');

    for (var i = 1; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    document.getElementById('menu').addEventListener('click', function(event) {
        event.preventDefault();
        
        if (event.target.tagName === 'A') {
            var targetId = event.target.getAttribute('href').substring(1);
            mostrarSeccion(targetId);
        }
    });

    function mostrarSeccion(id) {
        for (var i = 0; i < secciones.length; i++) {
            secciones[i].style.display = 'none';
        }

        document.getElementById(id).style.display = 'block';
    }
});
