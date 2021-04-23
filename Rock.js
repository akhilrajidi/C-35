class Rock {
    constructor(x,y, width, height){
        var options ={isStatic: false}

        this.image = loadImage("images/rock.png"); 
        this.width = width
        this.height = height
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        Matter.Body.setMass(this.body, this.body.mass*5); 
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
}