
let Xpos= 850;
let Ypos= 480;
let eWidth = 10
let eHeight = 50
let Flowers = []



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

fill('yellow');
circle(Xpos, Ypos,30);
fill('green');
for(let x = 0; x < TWO_PI; x+=PI/3){
  push();
  translate(Xpos, Ypos)
  rotate(x);
  ellipse(0, -40, eWidth,eHeight);
  pop();
}
}
/*function mousePressed(){
  Flowers.push(new Flower(mouseX, mouseY))
}
}
*/
