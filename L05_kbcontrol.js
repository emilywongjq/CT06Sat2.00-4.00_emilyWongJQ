let shapeColor = "blue"
let circleSize = 5;
function setup(){
    createCanvas(400,400)
    background(200);
    noStroke()
}

function mouseReleased(){
    shapeColor = color(random(0,255), random(0,255),random(0,255));
    circleSize = 20;
}
function mousePressed(){
    fill(color(random(255), random(255),random(255)));
}
function mouseDragged(){
    circleSize += 0.5;
    shapeColor = color(random(255), random(255),random(255));
    ellipse(mouseX,mouseY,circleSize,circleSize);
}



