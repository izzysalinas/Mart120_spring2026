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

    noStroke();
    textSize(12);
    fill(247, 248, 250);
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);

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

    //exit left cherry
    fill(255, 0, 0);
    circle(27, 170, 20);

    //exit right cherry
    fill(255, 0, 0);
    circle(x1, y1, diameter2);

    //exit leaf
    fill(3, 105, 1);
    ellipse(50, 132, 30, 20);

    //exit right stem
    fill(3, 105, 1);
    rect(45, 133, 5, 28);

    //exit left stem
    fill(3, 105, 1);
    rect(32, 132, 5, 28);

    //player
    fill(252, 186, 18);
    circle(x, y, diameter);

    //obstacle
    fill(250, 45, 188);
    rect(400, 55, 660, 40);

    //obstacle
    fill(250, 45, 188);
    rect(300, 420, 660, 40);

    //obstacle
    fill(250, 45, 188);
    rect(254, 215, -660, 40);

    //obstacle on click
    fill(250, 45, 188);
    rect(mousex, mousey, 40, 200);

    stroke(5);
    fill(247, 248, 250);
    text('This is supposed to be a cherry :(', 10, 100);

    if(x >= 50 && x <= 70 && y >= 170 && y <= 190){
        background(250, 45, 188);
        textSize(90);
        fill(5, 5, 5);
        text('You Won!', 381, 258);
    }


}

function keyPressed() {
    console.log(key, ' ', keyCode);
}


function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;

}
