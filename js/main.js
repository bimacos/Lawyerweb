$('body').scrollspy({
    target: '.dotted-scrollspy',
    offset: 100
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jarallax
    if (wScroll > $('.jarallax').offset().top + 100) {
        $('.view.jarallax.animated.fadeIn').removeClass('animated fadeIn');
    }
});
        
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})


// initialize lightbox
$(function () {
    $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// WOW.js init 
new WOW().init();

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 150;
        $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-link.dev-text').removeClass('dev-text');
            $('.nav-link').eq(i).addClass('dev-text');
        }
    });
}).scroll();