$(document).ready(function(){
    //================== mixItUp ====================
var container = document.querySelector('.gallery')
var mixer = mixitup(container,{
    selectors: {
        control: '[our-mix-control]'
    }
});

//================= owl-carousel====================
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        loop: true,
        margin: 50,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // wow.js ======================
    new WOW().init();



  });