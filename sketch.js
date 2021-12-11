
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,b1,b2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2,690,width,20);
  right = new Ground(500,670,10,100);
  left = new Ground(680,670,10,100);

	var ballOption = {

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
		  }

	//Create the Bodies Here.

	ball = Bodies.circle(200,100,20,ballOption);
World.add(world,ball)

b1 = createImg('right.png');
b1.position(220,30);
b1.size(50,50);
b1.mouseClicked(hforce);

b2 = createImg('up.png');
b2.position(20,30);
b2.size(50,50);
b2.mouseClicked(vforce);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20)
  

  drawSprites();

 
}


function hforce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	
	}
	
	function vforce(){
	
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	  
	  }

	
	  
	 