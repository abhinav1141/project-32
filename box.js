class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':0.4,
            'density':0.1,
             }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("text.png")
       
        World.add(world, this.body);
        this.visibility=255;
      }
      score()
{
  if(this.visibility<0&&this.visibility>-105){
    score++;
  }
}
      display(){
        console.log(this.body.speed)
        if(this.body.speed<7.5){
          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y, this.width, this.height);
        }
      else{
        World.remove(world,this.body);
        push();
        tint(255,255,255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        this.visibility=this.visibility-15;
        pop();
      }
      }
}
