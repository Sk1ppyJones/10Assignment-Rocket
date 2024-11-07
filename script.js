const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let rocketImg = new Image();
rocketImg.src = "img/rocket-svgrepo-com.svg";

let smokeImg = new Image();
smokeImg.src = "img/explosion.png";

let countdown = 10;
let count = 300;
let clickCount = 0;

let rocket = {
    x: 300,
    y: 320
}

function baseDraw() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 450, 800, 50);
    ctx.drawImage(rocketImg, rocket.x, rocket.y, 150, 150);
    ctx.fillStyle = "black"
    ctx.font = "30px sans-serif"
    ctx.fillText("Countdown: " + countdown, 20, 30)
}

function drawSmoke() {
    ctx.drawImage(smokeImg, rocket.x + 45, rocket.y + 120, 60, 60)
}

document.body.onload = function () {
    baseDraw();
}

document.getElementById("btnStart").onclick = function () {
    var countdownTimer = setInterval(function () {

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        baseDraw();
        countdown -= 1;

        if (countdown <= 0) {
            clearInterval(countdownTimer);
            requestAnimationFrame(gameLoop);
        }

    }, 1000)
}

function rocketMove() {
    rocket.y -= 1;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    baseDraw();
    drawSmoke();
    rocketMove();
    requestAnimationFrame(gameLoop);
}