
let Xpos= 850;
let Ypos= 480;
let eWidth = 40
let eHeight = 58
let flower = [];
let colors = ['blue','red','orange','green','yellow','purple']
let c = 'green';


function setup() {
  createCanvas(windowWidth, windowHeight);
  flower.push({x:Xpos, y:Ypos, color:'yellow'})
  frameRate(5);

}

function draw() {

  for(let i = 0; i < flower.length; i++){
    let f = flower[i]
    
    fill(c);
    for(let x = 0; x < TWO_PI; x+=PI/3){
      push();
      translate(f.x, f.y)
      rotate(x);
     ellipse(0, -40, eWidth,eHeight);
      pop();
    }
    fill(f.color);
    circle(f.x, f.y,30);
    c = random(colors)
  }
}
function mousePressed(){
  flower.push({x:mouseX, y:mouseY, color:'yellow'})
}

