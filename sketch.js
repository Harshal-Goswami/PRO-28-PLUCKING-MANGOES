
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	stoneObj = loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);
	mango2 = new mango();
	mango3 = new mango();
	mango4 = new mango();
	mango5 = new mango();

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Text("")
  image(boy ,200,340,200,300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  treeObj.display();
  mango1.display();
  groundObject.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body , {x:235 , y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function mouseReleased(){
	stoneObj.body.fly();
}

function detectCollision(lstone,lmango){
	detectcollision(stoneObj,mango1);
	detectcollision(stoneObj,mango2);
    detectcollision(stoneObj,mango3);	
	detectcollision(stoneObj,mango4);
	detectcollision(stoneObj,mango5);

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lmango.body.position

  var distance = dist(stoneBodyPosition.x ,stoneBodyPosition.y ,mangoBodyPosition.x , mangoBodyPosition.y);
  if(distance<lmango.r+lstone.r)
  {
   Matter.Body.setStatic(lmango.body,false);
  }
}