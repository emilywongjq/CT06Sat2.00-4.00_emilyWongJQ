// function setup(){
//     createCanvas(400,400);
// }

// let x = 200;
// let y = 200;
// function draw(){
//     background(25);
//     square
//     if(keyIsDown(UP_ARROW)){
//         rect()
//     }
//     constrain(x ,100, 300);
// }

let staticImage;
function preload(){
    staticImage = loadImage('assets/pico-a.png');
}

function setup(){
    cresteCanvas(200,200);
    background('lightblue');
    image(staticImage,0,0,100,100);
}