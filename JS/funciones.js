$(document).ready(function () {
    //funcion 1 mega menu se mantiene visible
    $('.mega-menu, .dropdown-menu').click(function (n) {
        n.stopPropagation();//no hacer nada al hacer click
    });
    //funcion 2 cerrar ventana modal del buscador
    $('.btn-buscar').click(function () {
        $('#buscador-modal').fadeIn();
    });
    $('.btn-cerrar').click(function () {
        $('#buscador-modal').fadeOut();
    });
    //efecto typed a texto
    var typed = new Typed('.typed', {
        strings: ["Más clientes.^1000", "Más ventas.^1000", "Más visivilidad.^1000"],
        smartBackspace: false,
        loop: true,//bucle
        //loopCount:3,
        typeSpeed: 40,//velocidad de cada letra
        backSpeed: 30,//velocidad de borrado
        startDelay:500,//tiempo de reinicio de animacion
        shuffLeft: true//mostrat teto aleatorio
    });

});