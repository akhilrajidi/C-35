const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var rock, rock1, bigRock;
var boggie1,boggie2,boggie3;
var chain1, chain2, chain3, chain4, chain5, chain6;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
 
  ground = new Ground(600,380,1200,20);
  chain1 = new Cart(550,250,50,50);
  chain2 = new Cart(450,250,50,50);
  chain3 = new Cart(350,250,50,50);
  chain4 = new Cart(250,250,50,50);
  chain5 = new Cart(150,250,50,50);
  chain6 = new Cart(50,250,50,50);
  rock = new Rock(1130,250,50,50);
  rock1 = new Rock(1020,250,50,50);
  bigRock = new BigRock(1075,250,50,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  rock.display();
  rock1.display();
  bigRock.display();
  strokeWeight(4);
  line(chain1.body.position.x, chain1.body.position.y, chain2.body.position.x, chain2.body.position.y);
  line(chain2.body.position.x, chain2.body.position.y, chain3.body.position.x, chain3.body.position.y);
  line(chain3.body.position.x, chain3.body.position.y, chain4.body.position.x, chain4.body.position.y);
  line(chain4.body.position.x, chain4.body.position.y, chain5.body.position.x, chain5.body.position.y);
  line(chain5.body.position.x, chain5.body.position.y, chain6.body.position.x, chain6.body.position.y);
  if(rock1.body.position.x > 1200){
    textSize(30);
    fill("blue");
    text("Crashed",600,200);
  }
  }
  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(chain6.body, {x:chain6.body.position.x, y:chain6.body.position.y}, {x: 0.5, y: 0});
      trainSound.play();
    }
  }

  
