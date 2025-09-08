//Variable
const slidesWrapper = document.querySelector(".slides-wrapper"); //wrapper om alle img
const slides = document.querySelectorAll(".slide"); //finder alle slides
const dots = document.querySelectorAll(".dot"); //Finder alle prikker
let currentIndex = 0; //lader slideshowet starte fra 1. slide (slide 1=0, slide 2=1 slide 3=2)
const totalSlides = slides.length; //Finder antal elementer med classen .slide (3)
 
 
//Slideshow funktionen
function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides; // Sikrer loop af slideshow /når index = 3 bliver currentIndex = (3+3) % 3 = 6 % 3 = 0 (slide 1)
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
 
    // Opdaterer prikker
    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === currentIndex); //når slides currentIndex matcher en priks index (i), aktiveres classen 'active-dot'
    });
}
 
// Automatisk skift hvert 5. sekund
setInterval(() => {showSlide(currentIndex + 1);}, 5000); //funktionen showSlide opdateres med interval på 5000 ms og lægger 1 til currentIndex
 
 
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i)); //Når der klikkes på en dot kører funktionen showSlide ift. det (i) index den givne prik har
});
 
// function nextSlide() {
//     showSlide(currentIndex + 1);
// }
 
// Start slideshow
showSlide(currentIndex);