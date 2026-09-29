

let eWidth = 40
let eHeight = 58
let flowers = [];
let colors = ['blue','red','orange','green','yellow','purple']
let flowerInfo = [
  { name: 'Rose', fact: 'thorny'},
  { name: 'Orchid', fact: 'orchidy'},
  { name: 'Waterlily', fact: 'watery'}
]
let c = 'green';
let tracker = 0;
let numFlower = 10;
Xpos = 50;
Ypos = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flowers.push(new Flower(Xpos, Ypos, 0));


}

function draw() {

   background('white');

  for(let f of flowers){

    if(tracker % 2 == 1)
    {
      f.move();
      
    }
   if(tracker % 2 == 0 && tracker != 0)
  {
   
     f.moveBack();
  }
  f.display();
}
}

function mousePressed(){

  if(tracker == 0){
    for(let i = 0; i < numFlower; i++)
    flowers.push(new Flower(random(50,windowWidth - 50), 50, i % flowerInfo.length));
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
