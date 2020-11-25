class Ball{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            'restitution':0.1,
             'denstity':0.1,
             'friction':0.1
             
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        this.image = loadImage("hexa2.png");
    
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}