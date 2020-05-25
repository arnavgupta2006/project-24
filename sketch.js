var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var rectangle1, rectangle2, rectangle3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ellipse(100,650,10,10,4);
	matter.Bodies.circle(ellipse);
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectangle1.shapeColor = "white";
  rectangle2.shapeColor = "white"; 
  rectangle3.shapeColor = "white";
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
} 



