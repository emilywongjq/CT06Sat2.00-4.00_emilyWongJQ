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
//more revision

// function setup(){
//     createCanvas(600,600);
//     background(200);
// }
// function draw(){
//     circle(width/2,height/2,75);
// }

function setup(){
    createCanvas(600,600);
    background(200);
}
function draw(){
    for(let i = 0 ; i<5 ; i++){
        fill()
        circle( 100 + i*100 , 100 + i*100 , 75);
    }
}


