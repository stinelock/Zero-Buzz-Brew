// Henter alle accordion header
const accordionHeaders = document.querySelectorAll('.accordion-header');
const icon = document.getElementById('icon')
 
// Tilføjer event listener til hver header
accordionHeaders.forEach(header => {
    header.addEventListener('click', toggleAccordion);
});
 
// Funktion til at toggle accordion
function toggleAccordion(event) {

    const icon = event.currentTarget.querySelector('.icon'); // Finder ikonet i den aktuelle header
    icon.classList.toggle('menuAaben');
    
    const content = event.currentTarget.nextElementSibling; // Finder det tilhørende indhold
    content.classList.toggle('visMenu'); }// Åbner eller lukker menuen (aktivere/slukker for classen visMenu)

    

