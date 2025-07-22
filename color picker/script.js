const targetDate = new Date("2025-07-22T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown(); 
 function saveNameAndGo() {
    const name = document.getElementById('name').value;
    if (name.trim() !== "") {
      localStorage.setItem('userName', name);
      window.location.href = "next.html";
    } else {
      alert("Please enter your name!");
    }
  }
  document.getElementById('name').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      saveNameAndGo();
    }
  });