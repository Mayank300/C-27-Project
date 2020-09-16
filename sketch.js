
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1Diameter;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,100,800,20);

	bob1 = new Bob(200,500,20,20);
	bob2 = new Bob(300,500,20,20);
	bob3 = new Bob(400,500,20,20);
	bob4 = new Bob(500,500,20,20);
	bob5 = new Bob(600,500,20,20);

	bobDiameter = 40;
	
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightPink");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



