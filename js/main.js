$(document).ready(function() {
    'use strict';

    // Make all blog listings the same height
    $(function() {
      $('.listing').matchHeight();
    });

    /* 
     * Bootstrap dependencies
    */
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    /*
     * Smooth scroll to div
    */
    $('a[href*="#"]:not([href="#"]):not([href="#my-carousel"]):not([role="tab"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });

    $('a[href="#"]').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });

    /*
     * Show/Hide to-top btn based on scroll position
    */
    function hideTopBtn(){
        return $("#to-top").css("display", "none");
    }
    function showTopBtn(){
        $("#to-top").css("display", "block");
    }
    if ($(document).scrollTop() > 5) {
        showTopBtn();
    } else {
        hideTopBtn();
    }
    $(window).scroll(function() {
        if ($(document).scrollTop() > 5) {
            showTopBtn();
        } else {
            hideTopBtn();
        }
    });

    /*
     * Add class line-numbers to pre tags
    */
    $('figure pre :not(.language-bash)').addClass("line-numbers");

    /*
     * Add class command-line and attr: data-user="cris" to bash code
    */
    $('.language-bash').addClass("command-line");
    $('pre').attr('data-user', 'cris');
});



//# sourceMappingURL=app.js.map
