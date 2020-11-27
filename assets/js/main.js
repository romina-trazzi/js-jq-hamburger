/*===============================================
=            CODICE JQUERY HAMBURGER            =
=================================================*/

// Se clicchiamo sul toggle il mostriamo menù
$(".header-right > a").click(function() {
    $(".hamburger-menu").show();
});


// Se clicchiamo sulla x nascondiamo il menù 
$(".close").click(function() {
    $(".hamburger-menu").hide();
});