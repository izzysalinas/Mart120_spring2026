let flower1;
let flower2;
let flower5;
let flower6;

let rococo;

let star;

let mainExit;

var mainExitX = 200
var mainExitY = 295

var x = -40
var y = -40
var speed = 2

//left top
var x1 = 80
var y1 = 80
//right top
var x2 = 320
var y2 = 80
//left bottom
var x3 = 80
var y3 = 480
//right bottom
var x4 = 320
var y4 = 480

var movement1 = 2
var movement2 = 2
var movement3 = 2
var movement4 = 2

function preload() {
    
    flower1 = loadImage("flower1.png");
    flower2 = loadImage("flower2.png");
    flower5 = loadImage("flower5.png");
    flower6 = loadImage("flower6.png");

    rococo = loadImage("rococo.png");

    star = loadImage("star.png");

    mainExit = loadImage("exit.png");

}
function setup() {
    createCanvas(480, 600);
    //resetGame();
}

function draw() {
    background(220);
    image(rococo, 0, 0);

    flowers();

    exitPoint();

    playerMovement();

}
function playerMovement() {
    image(star, x, y, 80, 80);
        if (keyIsDown(38)) {
        y -= speed;
    }
    else if (keyIsDown(40)) {
        y += speed;
    }

    if (keyIsDown(37)) {
        x -= speed;
    }
    else if (keyIsDown(39)) {
        x += speed;
    }
}

function exitPoint() {

    image(mainExit, mainExitX, mainExitY, 70, 70);
    if (x > mainExitX && x < mainExitX + 90 && y > mainExitY && y < mainExitY + 90) {

        noLoop();
        background(135, 157, 255);
        fill(255, 135, 219);
        textSize(50);
        text('You Won', 130, 200);
    }
}
function flowers() {
    //left
    image(flower1, x1, y1, 80, 80);
    //right
    image(flower2, x2, y2, 80, 80);
    //bottom left
    image(flower5, x3, y3, 80, 80);
    //bottom right
    image(flower6, x4, y4, 80, 80);

    x1 = x1 + movement1;
    if (x1 < 0) {
        movement1 *= -1;
    }
    if (x1 > 200) {
        movement1 *= -1;
    }

    x2 = x2 + movement2;
    if (x2 < 200) {
        movement2 *= -1;
    }
    if (x2 > 420) {
        movement2 *= -1;
    }
    
    x3 = x3 + movement3
    if(x3 < 0){
        movement3 *= -1;
    }
    if(x3 > 200){
        movement3 *= -1;
    }
    
    x4 = x4 + movement4
    if (x4 < 200){
        movement4 *= -1;
    }
    if(x4 > 420){
        movement4 *= -1;
    }

    if (x > x1 && x < x1 + 40 && y > y1 && y < y1 + 80) {

        noLoop();
        background(135, 157, 255);
        fill(255, 135, 219);
        textSize(50);
        text('You Lose', 130, 200);
    }
        if (x > x2 && x < x2 + 40 && y > y2 && y < y2 +80) {

        noLoop();
        background(135, 157, 255);
        fill(255, 135, 219);
        textSize(50);
        text('You Lose', 130, 200);
    }
        if (x > x3 && x < x3 + 40 && y > y3 && y < y3 + 80) {

        noLoop();
        background(135, 157, 255);
        fill(255, 135, 219);
        textSize(50);
        text('You Lose', 130, 200);
    }
        if (x > x4 && x < x4 + 40 && y > y4 && y < y4 + 80) {

        noLoop();
        background(135, 157, 255);
        fill(255, 135, 219);
        textSize(50);
        text('You Lose', 130, 200);
    }
}
