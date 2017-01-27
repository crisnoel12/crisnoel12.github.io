$(document).ready(function() {
    'use strict';
    /*
     * Waypoint animation variables and functions
     * Variables = section, elementsArr1, elementsArr2, animation[1,2]
    */
    var about = [
            ['#about'],
            ['#about .section-heading', '#about .header-line'],
            ['#about img', '#about p', '#about a'],
            ['slideInLeft', 'fadeInUp']
        ],
        skills = [
            ['#skills'],
            ['#skills .section-heading', '#skills .header-line'],
            ['#skills .skill'],
            ['slideInLeft', 'fadeInUp']
        ],
        works = [
            ['#works'],
            ['#works .section-heading', '#works .header-line'],
            ['#works .work'],
            ['slideInLeft', 'fadeIn']
        ],
        quotes = [
            ['#quotes'],
            ['#quotes .section-heading', '#quotes .header-line'],
            ['#quotes #my-carousel'],
            ['slideInLeft', 'fadeIn']
        ],
        blog = [
            ['#blog'],
            ['#blog .section-heading', '#blog .header-line'],
            ['#blog .blogs', '#blog .section-desc'],
            ['slideInLeft', 'fadeIn']
        ],
        contact = [
            ['#contact'],
            ['#contact .section-heading', '#contact .header-line', '#contact .contact-form'],
            ['#contact #map'],
            ['slideInLeft', 'fadeInUp']
        ],
        blogDiv = document.getElementById('blog'); // set blogDiv variable to check if it exists later on

    function hideSectionElements(elements) {
        $(elements).css('opacity', 0);
    }

    function showSectionElements(elements) {
        $(elements).css('opacity', 1);
    }

    function animateElements(elements, animation) {
        $('' + elements + '').addClass('animated' + ' ' + animation);
    }

    function waypointAnimation(section) {
        hideSectionElements(section[1] + ", " + section[2]);
        $(section[0]).waypoint(function() {
            showSectionElements(section[1] + "," + section[2]);
            animateElements(section[1], section[3][0]);
            animateElements(section[2], section[3][1]);
        }, {
            offset: '50%'
        });
    }

    /*
     * Run waypointAnimation only when window is greater than 768px
    */
    if ($(window).width() >= 768) {
        if (window.location.pathname === '/') {
            waypointAnimation(about);
            waypointAnimation(skills);
            waypointAnimation(works);
            waypointAnimation(quotes);
            if (blogDiv !== null) {
                waypointAnimation(blog);
            }
            waypointAnimation(contact);
        }
    }
});