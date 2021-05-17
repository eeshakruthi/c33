class Boggie{
    constructor(x,y,w,h){
      var factors ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,w,h,factors);
      World.add(myWorld,this.body);
      Matter.Body.setMass(this.body,this.body.mass*5);
      this.w = w;
      this.h = h;
      this.image=loadImage("images/coach.png");
    }
    show()
    {
        rectMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);      
    }
  }
