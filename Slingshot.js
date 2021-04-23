class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
   show(){
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           stroke(0)
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}