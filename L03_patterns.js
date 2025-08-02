let colourValue = 0; 
function setup() {
    createCanvas(800,800);
    background(255);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // fill(255, 148, 138);
  // circle(75,200,100);
  // fill(255, 251, 138);
  // circle(225,200,100);
  // fill(144, 255, 138);
  // circle(375,200,100);
  // fill(138, 200, 255);
  // circle(525,200,100);
  // Recap 1: Repeating Circles
  // Task 1: Colour Gradient
  // let spacing = 120;
  // for (let i = 0; i < 5 ; i++) {
  //   fill(colourValue);
  //   circle(50 + i * 50,100,40);
  //   colourValue += 1;
  // }
  // console.log(15%4)
  // Task 2: Colour Loop
  // for(let i = 0 ; i < 5 ; i++){
  //   if ( i % 2 === 0){
  //     fill(255);
  //   }else{
  //     fill(0);
  //   }
  //   circle(50 + i * 50,100,40);
  // Task 3: Row of Circles

  // Task 4: Grid of Circles
  // rect(0,50,width,100);
  // circle(width / 9 , height / 2,50);
  //find diameter of circle
  let circleDiameter = 30;
  //find number of circles
  let numOfCircles = 5;
  //find the total width (or at least type it in...)
  let totalWidth = circleDiameter * numOfCircles;
  let startX = (width - totalWidth)/2 + circleDiameter/2;

  for (let i = 0; i< numOfCircles; i++){
    let x = startX + i * circleDiameter;
    ellipse(x,height/2,circleDiameter , circleDiameter);
    circle(x,height/2,circleDiameter);
  }

}