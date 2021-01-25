const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var object;
var ground;
function setup(){

  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)

 var object_options={
   //isStatic:false
   restitution:1.5
 }

  object=Bodies.circle(200,100,20,object_options)
  World.add(world,object)
  
  console.log(object)
  console.log(object.position.x)
  console.log(object.position.y)

}
function draw()
{
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  //rect(200,200,50,50);
  //rect(object.position.x,object.position.y,50,50);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,20,20)
  rect(ground.position.x,ground.position.y,200,20)
  
}
