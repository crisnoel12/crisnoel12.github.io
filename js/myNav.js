$(document).ready(function() {
    'use strict';

    /*
     * Change navbar bg color to rgba(0,0,0,.85) when viewport is below the top or when window is less than 768px
    */
     function navbarDefault() {
         return $(".navbar").css({
             'background-color': 'rgba(0,0,0,.85)'
         });
     }

     function navbarTransparent() {
         return $(".navbar").css({
             'background-color': 'transparent'
         });
     }

    if (window.location.pathname === '/') {
        if ($(window).width() >= 768) {
            if (document.body.scrollTop !== 0) {
                navbarDefault();
            } else {
                navbarTransparent();
            }
        }
        $(window).scroll(function() {
            if ($(window).width() >= 768) {
                if ($(document).scrollTop() > 5) {
                    navbarDefault();
                } else {
                    navbarTransparent();
                }
            }
        });
        $(window).resize(function() {
            if ($(window).width() < 768) {
                navbarDefault();
            } else {
                if (document.body.scrollTop !== 0) {
                    navbarDefault();
                } else {
                    navbarTransparent();
                }
            }
        });
    }
});