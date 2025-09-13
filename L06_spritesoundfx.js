function setup(){
    createCanvas(400,400);
}

let x = 200;

function draw(){
    background(25);
    if(keyIsDown(UP_ARROW))
    constrain(x ,100, 300);
}
