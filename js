var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var x = 50;
var y = 50;
var speedX = 5;
var speedY = 3;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#FF0000";
    context.fillRect(x, y, 100, 100);

    // Move the rectangle
    x += speedX;
    y += speedY;

    // Bounce off the walls
    if (x < 0 || x > canvas.width - 100) {
        speedX = -speedX;
    }
    if (y < 0 || y > canvas.height - 100) {
        speedY = -speedY;
    }
}

setInterval(draw, 10);