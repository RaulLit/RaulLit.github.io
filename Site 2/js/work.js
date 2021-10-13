var slideIndex = 1;
core(slideIndex);

function moveSlide(n){
    core(slideIndex += n);
}

function moveDot(n) {
    core(slideIndex = n);
}

function core(n) {
    var i;
    const slides = document.getElementsByClassName('work-slides');
    const dots = document.getElementsByClassName('dots');

    if(n<1) {slideIndex = slides.length}
    if(n>slides.length) {slideIndex = 1}
    for(i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//CHANGES SLIDES BY TIME
var slideShowIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("work-slides");
    var dots = document.getElementsByClassName("dots");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideShowIndex++;
    if (slideShowIndex > slides.length) {slideShowIndex = 1}
    slides[slideShowIndex-1].style.display = "block";
    dots[slideShowIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}