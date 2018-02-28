/*
 * File name : scripts
 * Type: JavaScript
 * Author's name : Noah Michael
 * Website name : myPortfolio
 * File description : This file contains java script
 */

// Transparent nav bar appearance on scroll effect
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

//Smooth scrolling effect
$(document).ready(function(){
    // Adding smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Typewriter effect
var typed = document.getElementById('typed');
var typewriter = new Typewriter(typed, {
    loop: true
});

typewriter.typeString('Web Design')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Application Development')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Project Management')
    .pauseFor(1800)
    .start();