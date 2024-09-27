

class Bird {
    constructor(x, y, dy, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.color = color;
    }

    update() {
        this.y += this.dy;
        this.draw();
    }

    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, size, size);
        c.closePath();
    }

}

let bird = new Bird(100, 250, 1.5, 'yellow');


window.addEventListener('keyup', Fly);

function Fly() {
    bird.y -= 50;
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Object(x, y, height, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.color = color;

    this.update = function () {
        this.x -= speed;
        this.draw();
    }
    this.draw = function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, size, height);
        c.closePath();
    }
}

let bottomObjects = [];
let topObjects = [];

function init() {
    let x = 500
    for (let i = 0; i < 1000; i++) {
        let height = randomIntFromRange(200, 300);
        topObjects.push(new Object(x, 0, height, 'green'));

        let y = height + randomIntFromRange(100, 200);
        bottomObjects.push(new Object(x, y, HEIGHT - y, 'green'));
        x += 200;
    }
}

init()

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, WIDTH, HEIGHT);
    bird.update();


    for (let i = 0; i < topObjects.length; i++) {
        topObjects[i].update();
        bottomObjects[i].update();

        if (
            bird.x < topObjects[i].x + size &&
            bird.x + size > topObjects[i].x &&
            (bird.y < topObjects[i].height || bird.y + size > bottomObjects[i].y)
        ) {
            gameOver();
        }

        if (bird.y <= 0 || bird.y + size >= HEIGHT) {
            gameOver();
        }


        if (bird.x > topObjects[i].x + size && bird.x < topObjects[i].x + 2.5 + size) {
            score++;
            console.log("Score: " + score);
        }
    }


    c.font = "30px Arial";
    c.fillStyle = "black";
    c.fillText("Score: " + score, 10, 50);
}

function gameOver() {
    alert("Game Over!" + ' Best score '+ score);
}

animate();

