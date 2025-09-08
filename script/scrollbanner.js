document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".scrolling-track");
    const items = ["#NoBuzzNoPressure", "/img/ZBLogoSort.png"];
  
    // Function to create an item container (ensuring text & image align properly)
    function createItem(textOrImg) {
      const container = document.createElement("div");
      container.classList.add("scrolling-item");
  
      if (textOrImg.includes(".png")) {
        const img = document.createElement("img");
        img.src = textOrImg;
        img.alt = "ZB Logo";
        img.classList.add("scrolling-logo");
        container.appendChild(img);
      } else {
        const span = document.createElement("span");
        span.textContent = textOrImg;
        span.classList.add("scrolling-text");
        container.appendChild(span);
      }
  
      return container;
    }
  
    // Function to populate the track with enough items to make scrolling seamless
    function populateTrack() {
      track.innerHTML = ""; // Clear existing content
  
      for (let i = 0; i < 10; i++) { // Create enough items to ensure smooth looping
        items.forEach(item => track.appendChild(createItem(item)));
      }
    }
  
    // Start populating and ensure continuous smooth scrolling
    populateTrack();
    
    // Make scrolling seamless using a JavaScript-powered infinite loop
    let scrollAmount = 0;
    function animateScroll() {
      scrollAmount -= 1;
      if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
        scrollAmount = 0; // Reset smoothly
      }
      track.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(animateScroll);
    }
  
    animateScroll(); // Start animation
  });