/*===============================================
=            CODICE JQUERY HAMBURGER            =
=================================================*/

// Se clicchiamo sul toggle mostriamo il menù
var open = $(".header-right > a");
open.click(function() {
    $(".hamburger-menu").show();
});


// Se clicchiamo sulla x nascondiamo il menù 
var close = $(".close");
close.click(function() {
    $(".hamburger-menu").hide();
});