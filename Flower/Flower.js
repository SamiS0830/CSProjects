
class Flower{


constructor(x,y){

this.x = x;
this.y = y;
this.speed = 0.01;
this.t = 0;
this.targetY = random(800, 1000);
this.startY = (0,100);
this.color = random(colors);
  }

  display(){
    
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
    

    this.t += this.speed;
    this.y = lerp(this.startY, this.targetY, this.t);

  if(this.t > 1){
    this.speed = 0;
  }

}

 moveBack(){
 
  
     
    this.t += this.speed * -1;
    this.y = lerp(this.targetY, this.startY, this.t);

  if(this.t < 0){
    this.speed =0;
  }
}
}