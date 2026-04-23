var x = 750
var y = 505
var diameter = 50
var speed = 5
var mousex = 400
var mousey = 90
var myXs = [50, 27, 50, 45, 32, 400, 300, 254]
var myYs = [170, 170, 132, 133, 132, 55, 420, 215]
var myDiameter = [20, 20]
var colors = [[128, 3, 21], [255, 111, 0], [252, 186, 3]]

function setup() {
    createCanvas(800, 550);
}
function draw() {
    background(0, 1, 36);

    //player

    player();

    //cherries

    cherries();

    //leaf

    leaf();

    //left and right stem

    rectangles();

    //obstacles

    obstacles();

    //obstacle on click

    obstacleClick();

    //exit

    exitPoint();

    //movement

    keyPressed();


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
    circle(myXs[0], myYs[0], myDiameter[0]);
    circle(myXs[1], myYs[1], myDiameter[1]);
}


function leaf() {
    fill(3, 105, 1);
    ellipse(myXs[2], myYs[2], 30, 20);
}

function rectangles() {
    //exit right stem
    fill(3, 105, 1);
    rect(myXs[3], myYs[3], 5, 28);
    //exit left stem
    fill(3, 105, 1);
    rect(myXs[4], myYs[4], 5, 28);
}

function player() {
    fill(252, 186, 18);
    circle(x, y, diameter);
}

function obstacles() {
    fill(colors[0][0], colors[0][1], colors[0][2]);
    rect(myXs[5], myYs[5], 660, 40);
    fill(colors[1][0], colors[1][1], colors[1][2]);
    rect(myXs[6], myYs[6], 660, 40);
    fill(colors[2][0], colors[2][1], colors[2][2]);
    rect(myXs[7], myYs[7], -660, 40);
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
for (var i = 0; i < 11; i++) {
    console.log(i)
}