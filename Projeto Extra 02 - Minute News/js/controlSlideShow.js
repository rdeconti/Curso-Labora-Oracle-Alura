/**
****************************************************************************
  Project Labora/Alura/Oracle ONE
  Training Alura: Programming, HTML5, CSS3 e JAVASCRIPT
  Student: Rosemeire Deconti
  Description: Create a page with news
  Challenge: https://github.com/Infoglobo/desafio-front-end
  Date: November/2020
****************************************************************************
**/

var slideIndex = 1;

showSlides(slideIndex);

/** ------------------------------------------------------------------------ **/
function showSlides(n) {

  var i;

  var slides = document.getElementsByClassName("slideShowCarousel");
  var dots = document.getElementsByClassName("slideShowDot");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/** ------------------------------------------------------------------------ **/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/** ------------------------------------------------------------------------ **/
function currentSlide(n) {
  showSlides(slideIndex = n);
}
