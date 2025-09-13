function setup(){
    createCanvas(400,400);
}

let x = 200;
let y = 200;
function draw(){
    background(25);
    rect( x , y , x , y + 50 , x + 50 , y + 50 , x + 50 , y );
    if(keyIsDown(UP_ARROW)){

    }
    constrain(x ,100, 300);
}
