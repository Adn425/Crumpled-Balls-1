const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall;
var dustbin;
var ground;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,700,800,20)

	paperBall = new Paper(100,680,30);

  dustbin = new Dustbin(500,680);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paperBall.display();
  dustbin.display();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:128,y:-128})
  }
}