// class Abc {
//     constructor(x, y, height, color) {
//         this.x = x;
//         this.y = y;
//         this.height = height;
//         this.color = color;
//     }
//     update () {
//         this.x -= speed;
//         this.draw();
//     }
//     draw() {
//         c.beginPath();
//         c.fillStyle = this.color;
//         c.fillRect(this.x, this.y, size, height);
//         c.closePath();
//     }
//
// }
// let bottomObjects = [];
// let topObjects = [];
//
// function randomIntFromRange(min, max) {    return Math.floor(Math.random() * (max - min + 1) + min);}
//
// function init() {
//     let x = 200
//     for (let i = 0; i < 1000; i++) {
//         let height = randomIntFromRange(200, 300);
//         topObjects.push(new Abc(x, 0, height, 'green'));
//         let y = height + randomIntFromRange(100, 200);
//         bottomObjects.push(new Abc(x, y, HEIGHT - y, 'green'));
//         x += 200;
//     }
// }
// init();



/*
function randomIntFromRange(min, max) {    return Math.floor(Math.random() * (max - min + 1) + min);}

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
    let x = 200
    for (let i = 0; i < 1000; i++) {
        let height = randomIntFromRange(200, 300);
        topObjects.push(new Object(x, 0, height, 'green'));

        let y = height + randomIntFromRange(100, 200);
        bottomObjects.push(new Object(x, y, HEIGHT - y, 'green'));
        x += 200;
    }
} init()

 */





