let hours = document.getElementById("hours");
let minutes = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  var CurrentTime = new Date();

  hours.innerHTML = CurrentTime.getHours();
  minutes.innerHTML = CurrentTime.getMinutes();
  sec.innerHTML = CurrentTime.getSeconds();
}, 1000);
