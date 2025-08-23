//revision
let shapeColor = "blue"
let circleSize = 5;
function setup(){
    createCanvas(400,400)
    background(200);
    noStroke()
}


function mousePressed(){
    fill(color(random(255), random(255),random(255)));
    circleSize = 5
}
function mouseDragged(){
    circleSize += 0.3;
    shapeColor = color(random(255), random(255),random(255));
    ellipse(mouseX,mouseY,circleSize,circleSize);
}



