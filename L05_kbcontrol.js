let shapeColor ="blue";
let circleSize = 20;
function setup(){
    createCanvas(400,400)
    background(200);
}

function mouseDragged(){
    fill(random(255), random(255),random(255));
    circleSize += 2
    ellipse(mouseX,mouseY,circleSize,circleSize);
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255));
}