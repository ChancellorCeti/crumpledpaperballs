
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bottom;
var right;
var left;
var top_wall;
var groundObj;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;
	//make walls
	bottom =new Ground(200,390,400,20);
  	right = new Ground(390,200,20,400);
  	left = new Ground(10,200,20,400);
  	top_wall = new Ground(200,10,400,20);
	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);
	ellipseMode(RADIUS);


	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottom.show();
  top_wall.show();
  right.show();
  left.show();
  groundObj.show();
  leftSide.show();
  drawSprites();
	

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}



