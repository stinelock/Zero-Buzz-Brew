//Loading screen mens indholdet på sitet bliver loadet.
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mediaElements = document.querySelectorAll("img, video");
  let loadedCount = 0;
  let isLoaded = false;

  function checkIfLoaded() {
    if (isLoaded) return;
    isLoaded = true;

    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.remove(); // Completely remove it from the DOM
    }, 500);
  }

  function mediaLoaded() {
    loadedCount++;
    if (loadedCount >= mediaElements.length) {
      checkIfLoaded();
    }
  }

  // **Check immediately if all media is already loaded**
  let allLoadedImmediately = [...mediaElements].every((el) => el.complete);

  if (allLoadedImmediately) {
    loadingScreen.remove(); // **Never show the loader**
    return;
  }

  // **Otherwise, show the loader and track loading**
  loadingScreen.style.display = "flex";

  if (mediaElements.length === 0) {
    checkIfLoaded();
  } else {
    mediaElements.forEach((element) => {
      if (element.complete) {
        mediaLoaded();
      } else {
        element.addEventListener("load", mediaLoaded);
        element.addEventListener("error", mediaLoaded);
      }
    });
  }

  // **Failsafe: Force remove loader after 5 seconds max**
  setTimeout(checkIfLoaded, 5000);

  // **Use window.onload as an extra fallback**
  window.onload = () => {
    setTimeout(checkIfLoaded, 200);
  };
});
