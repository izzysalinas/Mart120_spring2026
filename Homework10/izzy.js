var textSizeVal = 12
var textMovement = 1
var count = 0

var x = 120
var movement = 1

var xSecond = 243
var movement2 = 1

var y = 256
var movement3 = 1

var ySecond = 130
var movement4 = 1

var xThird = 192
var yThird = 187
var movement5 = 1

function setup() {
  createCanvas(400, 400);
  movement = floor(random(5) + 1);
  movement2 = floor(random(5) + 1);
  movement3 = floor(random(2) + 1);
}


function draw() {
  background(245, 127, 204);

  noStroke();
  textSize(12);
  fill(200, 0, 0);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);

  textSize(14);
  fill(0, 0, 0);
  text('Izzy Salinas', 310, 390);

  //neck
  noStroke();
  fill(252, 226, 177);
  rect(150, 220, 90, 200);

  //face
  fill(270, 230, 177);
  circle(xThird, yThird, 250);
  xThird = xThird + movement5;
  yThird = yThird + movement5;
  if (xThird < 184) {
    movement5 *= -1;
  }
  if (xThird > 214) {
    movement5 *= -1;
  }
  if (yThird < 184) {
    movement5 *= -1;
  }
  if (yThird > 208) {
    movement5 *= -1;
  }

  //left white eye
  stroke(20);
  fill(255, 255, 255);
  ellipse(133, 160, 50, 30);

  //right white eye
  stroke(20);
  fill(255, 255, 255);
  ellipse(235, 160, 50, 30);

  x = x + movement;
  //left iris
  fill(94, 33, 2);
  circle(x, 160, 28);
  if (x < 140) {
    movement *= -1;
  }
  if (x > 120) {
    movement *= -1;
  }

  xSecond = xSecond + movement2
  //right iris
  fill(94, 33, 2);
  circle(xSecond, 160, 28);
  if (xSecond < 250) {
    movement2 *= -1;
  }
  if (xSecond > 230) {
    movement2 *= -1;
  }

  //left pupil
  fill(5, 5, 5);
  circle(x, 160, 10);

  //right pupil
  fill(5, 5, 5);
  circle(xSecond, 160, 10);

  //nose
  fill(252, 223, 159);
  triangle(172, 204, 185, 178, 189, 204);

  //left top lip
  noStroke();
  fill(252, 126, 126);
  triangle(174, 236, 161, 252, 183, 246);

  //right top lip
  fill(252, 126, 126);
  triangle(190, 236, 206, 252, 183, 246);

  y = y + movement3
  //bottom lip
  noStroke();
  fill(250, 140, 140);
  ellipse(184, y, 50, 20);
  if (y < 250) {
    movement3 *= -1;
  }
  if (y > 270) {
    movement3 *= -1;
  }

  //left eyelash
  fill(5, 5, 5);
  triangle(103, 149, 107, 157, 118, 148);

  //right eyelash
  fill(5, 5, 5);
  triangle(263, 149, 259, 156, 247, 146);

  //left eyebrow
  stroke(5);
  fill(61, 18, 1);
  line(157, 130, 99, 128);


  ySecond = ySecond + movement4
  //right eyebrow
  stroke(5);
  fill(61, 18, 1);
  line(204, ySecond, 260, ySecond);
  if (ySecond < 135) {
    movement4 *= -1;
  }
  if (ySecond > 100) {
    movement4 *= -1;
  }

  //right dark red streak
  fill(92, 1, 7);
  triangle(293, 75, 293, 311, 348, 294);

  //left dark red streak
  fill(92, 1, 7);
  triangle(82, 95, 82, 310, 40, 290);

  //left pink streak
  fill(255, 0, 132);
  rect(80, 115, 22, 200);

  //right pink streak
  fill(255, 0, 132);
  rect(272, 112, 22, 200);

  //pink left bang
  fill(255, 0, 132);
  triangle(190, 62, 90, 118, 160, 112);

  //pink right bang
  fill(255, 0, 132);
  triangle(190, 62, 282, 114, 202, 110);

  //dark red right bang
  fill(92, 1, 7);
  triangle(190, 62, 305, 136, 320, 75);

  //dark red left bang
  fill(92, 1, 7);
  triangle(190, 62, 79, 131, 80, 80);

  //freckles
  fill(176, 131, 99);
  point(135, 206);

  //freckles
  fill(176, 131, 99);
  point(150, 200);

  //freckles
  fill(176, 131, 99);
  point(120, 200);

  //freckles
  fill(176, 131, 99);
  point(135, 198);

  //freckles
  fill(176, 131, 99);
  point(215, 200);

  //freckles
  fill(176, 131, 99);
  point(245, 200);

  //freckles
  fill(176, 131, 99);
  point(230, 205);

  //freckles
  fill(176, 131, 99);
  point(230, 198);

  textSize(textSizeVal);
  fill(5, 5, 5);
  text('Self Portrait', 150, 390);

  textSizeVal = textSizeVal + textMovement;
  count++;

  if (count >= 5) {
    textSizeVal += textMovement;
    count = 0;
  }

  if (textSizeVal > 24 || textSizeVal < 12) {
    textMovement *= -1;
  }

}