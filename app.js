let score = 0;
const scorediv = document.getElementById("score");

function getid(id, text) {
    let element = document.getElementById(id);
    element.addEventListener("click", function() {
        y = (Math.random()*500);
        x = (Math.random()*500);
        element.innerHTML = text;
        element.style.position = "relative";
        element.style.left = y + "px";
        element.style.top = x + "px";
        score++;
        scorediv.innerText = score
    })
    
};
getid("square", `<button id = "btn"></button>`);

const departMinutes = 1
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)

