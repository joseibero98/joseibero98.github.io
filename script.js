document.addEventListener('DOMContentLoaded', function() {
    var secciones = document.getElementsByClassName('seccion');
    var menu = document.getElementById('menu');

    for (var i = 1; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    function mostrarSeccion(id) {
        for (var i = 0; i < secciones.length; i++) {
            secciones[i].style.display = 'none';
        }

        document.getElementById(id).style.display = 'block';
        cerrarMenu();
    }

    window.toggleMenu = function() {
        menu.classList.toggle('show');
    };

    function cerrarMenu() {
        menu.classList.remove('show');
    }

    window.onclick = function(event) {
        if (!event.target.matches('.menu-icon') && !event.target.matches('.bar') && !event.target.matches('.menu')) {
            cerrarMenu();
        }
    };
});
