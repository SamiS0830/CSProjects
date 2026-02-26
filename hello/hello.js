


function setup() {
  createCanvas(400, 400);

  input = createInput();
  input.position(20, 20);
  input.size(300);

  button = createButton('enter');
  button.position(input.x + input.width, 20);

  //when button is pressed
  button.mousePressed(formula);
}

let x = 50;

function draw() {

  background(255);
  
  fill(0);
  ellipse(x, 200, 100, 50);
  x++;

  textSize(32);
  textAlign(CENTER,CENTER);
  text(prompt, width/2, height/2);
  
}

let prompt = "";


function formula(){
  //refresh background
  
   //connect variable to the prompt
  prompt = input.value();
  input.value('');
 
  
}

