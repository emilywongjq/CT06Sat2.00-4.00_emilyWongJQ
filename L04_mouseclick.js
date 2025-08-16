// write your codes here
//Task 1!
//______________________________________________________________________________
// let shapeColor ="blue";

// function setup(){
//     createCanvas(400,400)
//     background(200);
// }

// function draw(){
//     fill(shapeColor);
//     ellipse(200,200,80,80)
// }

// function mousePressed(){
//     shapeColor = color(random(255), random(255),random(255))
// }

// function mouseReleased(){
//     shapeColor = color(random(255), random(255),random(255))
// }
//_______________________________________________________________________________
//Challenge 1!
let shapeColor ="blue";

function setup(){
    createCanvas(400,400)
    background(200);
}
function draw(){
    fill(shapeColor);
    //change
    if(mouseIsPressed){
        triangle(x1,y1,x2,width,height);
    }
}

function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    let x
    let width = random(400);
    let height = random(400);
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}