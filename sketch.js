const
Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;
Mouse = Matter.Mouse;
MouseConstraint = Matter.MouseConstraint;

var engine, world;

var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var ground1, ground2;

var pig1, pig2;

var bird;

var birdCon;

var mCon;

var birdReleased;

function setup() {
  var canvas = createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(1000, 650, 100, 100);
  box2 = new Box(1300, 650, 100, 100);

  pig1 = new Pig(1150, 650);

  log1 = new Log(1150, 588, 400, PI/2);

  box3 = new Box(1000, 525, 100, 100);
  box4 = new Box(1300, 525, 100, 100);
  
  pig2 = new Pig(1150, 525);
  
  log2 = new Log(1150, 462, 400, PI/2);
  
  box5 = new Box(1150, 399, 100, 100);

  log3 = new Log(1240, 350, 200, -PI/8);
  
  log4 = new Log(1060, 350, 200, PI/8);

  bird = new Bird(200, 0);

  ground1 = new Ground(200, 600, 400, 400, [139,69,19]);

  ground2 = new Ground(width/2, height*15/16, width, height*1/8, [139,69,19]);

  birdCon = new Slingshot(bird.body, 50, 0, {x:0, y:0}, {x:350, y:145});

  // var canvasMouse = Mouse.create(canvas.elt);
	// canvasMouse.pixelRatio = pixelDensity();

	// var mCOpt = 
	// {
	// 	mouse: canvasMouse
	// }

	// mCon = MouseConstraint.create(engine, mCOpt);

	// World.add(world, mCon);

  birdReleased = false;

  // engine.timing.timeScale = 0;
}

function draw() {
  background(50);

  // if (mCon.body && mCon.body != bird.body)
  // {
  //   World.remove(world, mCon);
  // }

  Engine.update(engine);

  if (!birdReleased)
  {
    box1.resetPosition();
    box2.resetPosition();
    box3.resetPosition();
    box4.resetPosition();
    box5.resetPosition();
    log1.resetPosition();
    log2.resetPosition();
    log3.resetPosition();
    log4.resetPosition();
    pig1.resetPosition();
    pig2.resetPosition();
  }
  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();

  birdCon.drawCatapult();
  birdCon.drawLine([45, 23, 11], 10);
  // birdCon.drawPoints(10, "orange", "green");

  text(mouseX, 100, 100);
  text(mouseY, 100, 150);

}


function mouseDragged()
{
  Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
  Matter.Body.setAngularVelocity(bird.body, 0);
  Matter.Body.setAngle(bird.body, 0);
}

function mouseReleased()
{
  // World.add(world, mCon);
  // if (mCon.body == bird.body)
  // {
  //   birdReleased = true;
  //   World.remove(world, mCon);
  //   birdCon.constraint.bodyA = null;
  // }

  shootBird();
}

// Matter.Events.on(mCon, "mouseup", function()
// {
//   World.add(world, mCon);
//   if (mCon.body == bird.body)
//   {
//     birdReleased = true;
//     World.remove(world, mCon);
//     birdCon.constraint.bodyA = null;
//   }
// });

function shootBird()
{
  birdReleased = true;
  // World.remove(world, mCon);
  birdCon.constraint.bodyA = null;
}