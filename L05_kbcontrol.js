//revision
// let shapeColor = "blue"
// let circleSize = 5;
// function setup(){
//     createCanvas(750,750)
//     background(200);
//     noStroke()
// }


// function mousePressed(){
//     fill(color(random(255), random(255),random(255)));
//     circleSize = 5
// }
// function mouseDragged(){
//     circleSize += 0.3;
//     shapeColor = color(random(255), random(255),random(255));
//     ellipse(mouseX,mouseY,circleSize,circleSize);
// }
//more revision (line of circles)

// function setup(){
//     createCanvas(600,600);
//     background(200);
// }
// function draw(){
//     for(let i = 0 ; i<5 ; i++){
//         fill(0 , i * 50 , 0);
//         circle( 100 + i*100 , 100 + i*100 , 75);
//     }
// }


let rectSize = 50;

function setup(){
    createCanvas(300,300);
}

function draw(){
    background(220);
    rect(width/2 - rectSize/2 , height/2 - rectSize / 2 , rectSize, rectSize);
}

function keyPressed(){
    rectSize = 100;
}

function keyReleased(){
    rectSize = 50;
}