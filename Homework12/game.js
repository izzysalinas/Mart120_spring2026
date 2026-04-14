var x = 750
var y = 505
var x1 = 50
var y1 = 170
var speed = 5
var diameter = 50
var diameter2 = 20
var mousex = 400
var mousey = 90

function setup() {
    createCanvas(800, 550);
}
function draw() {
    background(0, 1, 36);

    keyPressed();

    //exit left and right cherry

    cherries();

    //exit leaf

    leaf();

    //exit left and right stem

    rectangles();

    //player

    player();

    //obstacles

    obstacles();

    //obstacle on click

    obstacleClick();

    //exit

    exitPoint();


}

function keyPressed() {

    if (keyIsDown(38)) {
        y = y - speed;
    }
    else if (keyIsDown(40)) {
        y = y + speed;
    }

    if (keyIsDown(37)) {
        x = x - speed;
    }
    else if (keyIsDown(39)) {
        x = x + speed;
    }
}


function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;

}

function cherries() {
    fill(255, 0, 0);
    circle(27, 170, 20);
    fill(255, 0, 0);
    circle(x1, y1, diameter2);
}


function leaf() {
    fill(3, 105, 1);
    ellipse(50, 132, 30, 20);
}

function rectangles() {
    //exit right stem
    fill(3, 105, 1);
    rect(45, 133, 5, 28);
    //exit left stem
    fill(3, 105, 1);
    rect(32, 132, 5, 28);
}

function player() {
    fill(252, 186, 18);
    circle(x, y, diameter);
}

function obstacles() {
    fill(250, 45, 188);
    rect(400, 55, 660, 40);
    fill(250, 45, 188);
    rect(300, 420, 660, 40);
    fill(250, 45, 188);
    rect(254, 215, -660, 40);
}

function obstacleClick() {
    fill(250, 45, 188);
    rect(mousex, mousey, 40, 200);
}

function exitPoint() {
    if (x >= 50 && x <= 70 && y >= 170 && y <= 190) {
        background(250, 45, 188);
        textSize(90);
        fill(5, 5, 5);
        text('You Won!', 381, 258);
    }
}