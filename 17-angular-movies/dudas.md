
    Todos comparten las mismas reglas CSS


       <div ng-include="'templates/header.htm'"></div>
        no sirve dentro de un template sino en el index.html
<!-- <ng-include src="header.html" scope="" onload=""></ng-include> -->


    cuando se navega entre los templates la página nunca se recarga, simplemente cambia de uno a otro, por lo tanto, los posibles cambios no se ven.


    en github gh-pages no funciona

    