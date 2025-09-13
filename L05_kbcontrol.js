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

//Excersise 1
// let rectSize = 50;

// function setup() {
//     createCanvas(400,400);
//     noStroke();
// }

// function draw() {
//     background(220);
//     rect(width/2 - rectSize/2 , height/2 - rectSize/2, rectSize, rectSize);
// }

// function keyPressed() {
//     rectSize = 100;
// }

// function keyReleased() {
//     rectSize = 50;
// }

// let showCircle = false; 

// function setup(){
//     createCanvas(600,600);
// }
// function draw() {
//     background(170);
//     if (showCircle){
//         circle(width / 2,height / 2 ,100);
//     }
// }

// function keyPressed(){
//     if (key === 'c'){
//         showCircle = ! showCircle;
//     }
// }
// let rectSize = 50;

// function setup(){
//     createCanvas(600,400);
// }
// function draw() {
//     background(170);
//     if (keyCode === 99){
//         circle(width/2 ,height/2 , 100);
//     }
//     if (key === 's'){
//         rect(width / 2 - rectSize/2 , height/2 - rectSize/2 , rectSize, rectSize);
//     }
//     if (key === 't'){
//         triangle(500,150,200,100,200,200);
//     }
// }

// let circleColour = 'red'
// function setup(){
//     createCanvas(600,600);
// }

// function draw(){
//     background(220);
//     fill(circleColour);
// circle(width/2 , height/2 , 100);
//     if (keyCode == 38){
//         circleColour = 'red';
//     }
//     if (keyCode == 40){
//         circleColour = 'black';
//     }
// }

// function setup(){
//     createCanvas(600,600);
// }

// function draw(){
//     background(220);
//     if (keyCode === 87){
//         fill(255,255,255);
//     }
//     else if (keyCode === 82){
//         fill(255,0,0);
//     }
//     else if (keyCode === 71){
//         fill(0,255,0);
//     }
//     else{
//         fill(255,255,0);
//     }

//     circle(width/2 , height/2 , 100);
// }


// function setup(){
//     createCanvas(600,600);
// }

// function draw(){
//     background(220);
//     if (mouseX < 100){
//         fill(242, 58, 83);
//     }
//     else if (mouseX < 200){
//         fill(0, 255, 89);
//     }
//     else if (mouseX < 300){
//         fill(58, 101, 242);
//     };
//     circle(width/2,height/2,100);
// }



let x = 200;
let y = 200;

function setup(){
    createCanvas(400,400);
}
let ball_boost = 0;
let ball_speed = 0;
function draw(){
    background(220);
    circle( x, y, 50);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
        if(keyIsDown(SHIFT)){
            ball.x -= ball_boost;
        }
        else{
            ball.x -= ball_speed;
        }
    }
    else if (keyIsDown(RIGHT_ARROW)){
        x+=5;
        if(keyIsDown(SHIFT)){
            ball.x += ball_boost;
        }
        else{
            ball.x += ball_speed;
        }
    }
    else if (keyIsDown(UP_ARROW)){
        y-=5;
        if(keyIsDown(SHIFT)){
            ball.y -= ball_boost;
        }
        else{
            ball.y -= ball_speed;
        }
    }
    else if (keyIsDown(DOWN_ARROW)){
        y+=5;
        if(keyIsDown(SHIFT)){
            ball.y += ball_boost;
        }
        else{
            ball.y += ball_speed;
        }
    }
    if (keyIsDown(shift)){
        speed += 1;
    }
    x = constrain(x, 0, 400);
    y = constrain(y, 0, 400);
}