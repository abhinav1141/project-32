class Point{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.point = Constraint.create(options);
        World.add(world, this.point);
    }
    attach()
    {
      this.point.bodyA=polygon.body;
    }

    display(){
        if(this.point.bodyA){
            var pointA = this.point.bodyA.position;
            var pointB = this.point.pointB;
            strokeWeight(4);
            stroke("yellow")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
    }
    
    fly(){
        this.point.bodyA=null;
    }

    }

   