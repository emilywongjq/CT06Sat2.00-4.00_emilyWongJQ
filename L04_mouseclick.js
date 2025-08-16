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
// let shapeColor ="blue";

// function setup(){
//     createCanvas(400,400)
//     background(200);
// }
// function draw(){
//     fill(shapeColor);
//     //change
//     if(mouseIsPressed){
//         triangle(x1,y1,x2,x3,y3);
//     }
// }

// function mousePressed(){
//     shapeColor = color(random(255), random(255),random(255))
//     let x1 = random(width);
//     let y1 = random(height);
//     let x2 = random(width);
//     let y2 = random(height);
//     let x3 = random(width);
//     let y3 = random(height);
    
// }

// function mouseReleased(){
//     shapeColor = color(random(255), random(255),random(255))
// }



// answer

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
//____________________________________________
let shapeColor ="blue";
let circleSize = 20;
function setup(){
    createCanvas(400,400)
    background(200);
}

function draw(){
    fill(shapeColor);
    ellipse(200,200,80,80)
}

function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
    circleSize = 20;
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}
function mouseMoved(){
    
}