let shapeColor = "blue"
let circleSize = 20;
function setup(){
    createCanvas(400,400)
    background(200);
}

function mouseReleased(){
    shapeColor = color(random(0,255), random(0,255),random(0,255));
    circleSize = 20;
}
function mousePressed()
function mouseDragged(){
    circleSize += 0.5;
    noStroke()
    shapeColor = color(random(255), random(255),random(255));
    ellipse(mouseX,mouseY,circleSize,circleSize);
}



