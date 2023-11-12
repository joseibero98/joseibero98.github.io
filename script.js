document.addEventListener('DOMContentLoaded', function() {
    var secciones = document.getElementsByClassName('seccion');
    var menu = document.getElementById('menu');

    for (var i = 1; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    window.toggleMenu = function() {
        $(menu).slideToggle();
    };

    function mostrarSeccion(id) {
        for (var i = 0; i < secciones.length; i++) {
            secciones[i].style.display = 'none';
        }

        document.getElementById(id).style.display = 'block';
        cerrarMenu();
    }

    function cerrarMenu() {
        if ($(menu).is(':visible')) {
            $(menu).slideToggle();
        }
    }

    window.onclick = function(event) {
        if (!event.target.matches('.menu-icon') && !event.target.matches('.bar')) {
            cerrarMenu();
        }
    };
});
