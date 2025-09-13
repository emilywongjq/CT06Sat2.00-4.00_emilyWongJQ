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

let staticImage,soundEffect;
function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundeffect = loadSound('assets/pop.mp3')
}

function setup(){
    createCanvas(200,200);
    background('lightblue');
    image(staticImage,0,0,100,100);
}
function keyPressed(){
    if (keyCode === 32){
        soundEffect.play()
    }
}