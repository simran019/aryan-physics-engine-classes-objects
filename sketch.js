var box1;
var box2;

function setup()
{
  createCanvas(400,400);
  box1=new Box(100,100,50,60);
  //box1 is the new object of Box class
  //control goes to constructor()
  //create an object of class Box
  //name of object is box1
  box2=new Box(200,200,50,50);
}
function draw()
{
  background("black");
  box1.show();
  box2.show();
}

// const Engine=Matter.Engine;
// const World=Matter.World;
// const Bodies=Matter.Bodies;
// //namespacing

// var myengine,myworld;
// var ground1;
// var ground2;
// var ball1;
// var ball2;
// function setup()
// {
//   createCanvas(400,400);
//   myengine=Engine.create();
//   myworld=myengine.world;

//   var options={isStatic:true}
//   var ball_options={restitution:0.8}
//   ground1=Bodies.rectangle(200,380,400,10,options);
//   World.add(myworld,ground1);

//   ground2=Bodies.rectangle(200,200,400,10,options);
//   World.add(myworld,ground2);

//   ball1=Bodies.circle(200,300,15,ball_options);
//   World.add(myworld,ball1);

//   ball2=Bodies.circle(300,300,10,ball_options);
//   World.add(myworld,ball2);

// }
// function draw()
// {
//   background("black");
//   Engine.update(myengine);

//   rectMode(CENTER);
//   rect(ground1.position.x,ground1.position.y,400,10);
//   rect(ground2.position.x,ground2.position.y,400,10);

//   ellipseMode(RADIUS);
//   ellipse(ball1.position.x,ball1.position.y,15,15);
//   ellipse(ball2.position.x,ball2.position.y,10,10);
// }