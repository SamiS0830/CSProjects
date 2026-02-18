function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  fullscreen(true);
  textsize(32);
  file(0);
  text(input.value(), 20, 150);  // updates every frame as you type
}
