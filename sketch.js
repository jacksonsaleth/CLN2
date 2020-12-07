const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,buk1,buk2,buk3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       ball=new Ball(100,330);
       ground=new Ground(600,380,width,20);
       buk1=new Buk(900,363,150,10);
      buk2=new Buk(820,330,10,75);
      buk3=new Buk(980,330,10, 75);
	   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  ball.display();
  ground.display();
  buk1.display();
  buk2.display();
  buk3.display();
  drawSprites();
 
 }

function keyPressed(){


if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95});
  
}
}