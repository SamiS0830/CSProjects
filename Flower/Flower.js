
class Flower{


constructor(x,y){
this.startY = y;
this.startX = x;
this.x = x;
this.x = y;
this.speed = 0.03;
this.t = 0;
this.targetY = random(windowHeight -100, windowHeight -20);
this.color = random(colors);
  }

  display(){
     background('white');
    fill(this.color);
    for(let x = 0; x < TWO_PI; x+=PI/3){
      push();
      translate(this.x, this.y)
      rotate(x);
     ellipse(0, -40, eWidth,eHeight);
      pop();
    }
    fill('black');
    circle(this.x, this.y,30);
    

 }

 move(){
  if(this.t < 1){
    this.t += this.speed;
    this.y = lerp(this.startY, this.targetY, this.t);
  }
}

 moveBack(){
   if(this.t > 1){
     
    this.t += this.speed;
  
    this.y = lerp(this.targetY, this.startY, this.t);
  }
}
}