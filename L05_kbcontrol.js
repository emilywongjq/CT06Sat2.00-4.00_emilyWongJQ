let shapeColor ="blue";
let circleSize = 20;
function setup(){
    createCanvas(400,400)
    background(200);
}

function mouseDragged(){
    fill(random(255), random(255),random(255));
    circleSize = random(10,100);
    ellipse(mouseX,mouseY,circleSize,circleSize);
}
function mousePressed(){
    shapeColor = color(random(255), random(255),random(255));
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255));
}