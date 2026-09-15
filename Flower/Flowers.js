

let eWidth = 40
let eHeight = 58
let flowers = [];
let colors = ['blue','red','orange','green','yellow','purple']
let c = 'green';
let tracker = 0;
let numFlower = 10;
Xpos = 50;
Ypos = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flowers.push(new Flower(Xpos, Ypos));


}

function draw() {
   background('white');
  for(let f in flowers)
    flowers[f].display();

    if(tracker % 2 == 1 )
    {
      for (let f in flowers)
       flowers [f].move();
      
    }

  if(tracker % 2 == 0 && tracker != 0)
  {
    for(let f in flowers)
      flowers[f].moveBack();
  }

}

function mousePressed(){
  if(tracker == 0){
    for(let i = 0; i < numFlower; i++)
    flowers.push(new Flower(random(50,windowWidth - 50),50))
  }
 
  tracker++;

  if(tracker % 2 == 1 ){
    for (let f of flowers){
      f.t = 0;
    }
  }
  if(tracker % 2 == 0)
    for(let f of flowers){
    f.t = 1;
    }

}

