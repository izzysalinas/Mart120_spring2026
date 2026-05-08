var x = 500
var y = 420
var movement = 3

//cat face
var head = [30, 450];
//left eye
var leftEye = [-10, 0];
//right eye
var rightEye = [15, 0];
//left iris
var leftIris = [-10, 0];
//right iris
var rightIris = [15, 0];
//left pupil
var leftPupil = [-10, 0];
//right pupil
var rightPupil = [15, 0];
//left ear
var leftEar = [-18, -25];
//right ear
var rightEar = [15, -25];

//sun face
var face = [0, 0];
var leftEyeball = [-10, -10];
var rightEyeball = [10, -10];
var mouth = [0, 20];

var speed = 2


function setup() {
    createCanvas(600, 550);
}
function draw() {

    background(98, 168, 252);
    fill(1, 135, 1);

    //grass
    noStroke();
    rect(0, 480, 600, 80);

    fill(1, 2, 64);
    textSize(20);
    text('Avoid the moving red thing', 180, 165);

    playerMovement();

    obstacleMovement();

    exitPoint();

    player();

    sun();

}
function player() {

    //face
    fill(224, 151, 4);
    circle(head[0], head[1], 60);

    //left eye
    fill(255, 255, 255);
    ellipse(head[0] + leftEye[0], head[1] + leftEye[1], 20, 10);

    //right eye
    fill(255, 255, 255);
    ellipse(head[0] + rightEye[0], head[1] + rightEye[1], 20, 10);

    //left iris
    fill(93, 252, 96);
    circle(head[0] + leftIris[0], head[1] + leftIris[1], 10);

    //right iris
    fill(93, 252, 96);
    circle(head[0] + rightIris[0], head[1] + rightIris[1], 10);

    //left pupil
    fill(0, 0, 0);
    ellipse(head[0] + leftPupil[0], head[1] + leftPupil[1], 4, 6);

    //right pupil
    fill(0, 0, 0);
    ellipse(head[0] + rightPupil[0], head[1] + rightPupil[1], 4, 6);

    //left ear
    fill(224, 151, 4);
    ellipse(head[0] + leftEar[0], head[1] + leftEar[1], 10, 20);

    //right ear
    fill(224, 151, 4);
    ellipse(head[0] + rightEar[0], head[1] + rightEar[1], 10, 20);

}
function sun() {

    translate(mouseX, mouseY);

    //face
    fill(240, 214, 17);
    circle(face[0], face[1], 100);

    //left eye
    fill(0, 0, 0);
    circle(face[0] + leftEyeball[0], face[1] + leftEyeball[1], 10);

    //right eye
    fill(0, 0, 0);
    circle(face[0] + rightEyeball[0], face[1] + rightEyeball[1], 10);

    //mouth
    fill(0, 0, 0);
    ellipse(face[0] + mouth[0], face[1] + mouth[1], 20, 10);

}
function playerMovement() {

    if (keyIsDown(38)) {
        head[1] -= speed;
    }
    else if (keyIsDown(40)) {
        head[1] += speed;
    }

    if (keyIsDown(37)) {
        head[0] -= speed;
    }
    else if (keyIsDown(39)) {
        head[0] += speed;
    }
}
function exitPoint() {
    if (head[0] > x && head[0] < x + 120 && head[1] > y && head[1] < y + 120) {
        background(0, 0, 0);

        noLoop();
        fill(255, 255, 255);
        textSize(50);
        text('Game Over', 175, 112);
        fill(240, 214, 17);
        circle(303, 219, 100);
        fill(255, 0, 0);
        circle(290, 210, 10);
        fill(255, 0, 0);
        circle(308, 210, 10);
        fill(255, 0, 0);
        ellipse(298, 236, 20, 10);
    }
}
function obstacleMovement() {
    x = x + movement;
    fill(255, 0, 0);
    square(x, 420, 60, 20);
    if (x < 0) {
        movement *= -1;
    }
    if (x > 600) {
        movement *= -1;
    }
}