//Variable
const countdownDate = new Date("October 15, 2025 12:00:00").getTime(); //Måldato for nedtælling
const dage = document.getElementById("dage");
const timer = document.getElementById("timer");
const minutter = document.getElementById("minutter");
const sekunder = document.getElementById("sekunder");

function startCountdown(targetDate) {
  //Function der sørger for at nedtælling er opdateret
  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "Tidspunktet er nået!";
      clearInterval(interval);
      return;
    }

    //beregning af de forskellige enheder (dage/timer/min/sek)

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //Indsætter de beregnede tal i HTML. De er sat i span for at kunne style dem i CSS
    dage.innerHTML = `<span class="tal">${days}</span>`;
    timer.innerHTML = `<span class="tal">${hours}</span>`;
    minutter.innerHTML = `<span class="tal">${minutes}</span>`;
    sekunder.innerHTML = ` <span class="tal">${seconds}</span>`;
  }

  updateCountdown(); //Kalder funktionen updateCountdown
  const interval = setInterval(updateCountdown, 1000); //Kalder funktionen updateCountdown med et interval på 1 sekund (1000ms)
}

//Kalder funktionen ovenfor for at starte countdown og opdatere
startCountdown(countdownDate);
