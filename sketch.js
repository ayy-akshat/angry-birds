const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var ground1, ground2;

var pig1, pig2;

var bird;

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(1000, 650, 100, 100);
  box2 = new Box(1300, 650, 100, 100);

  pig1 = new Pig(1150, 650);

  log1 = new Log(1150, 600, 400, PI/2);

  box3 = new Box(1000, 525, 100, 100);
  box4 = new Box(1300, 525, 100, 100);
  
  pig2 = new Pig(1150, 525);
  
  log2 = new Log(1150, 475, 400, PI/2);
  
  box5 = new Box(1150, 420, 100, 100);

  log3 = new Log(1240, 365, 200, -PI/8);
  
  log4 = new Log(1060, 365, 200, PI/8);

  bird = new Bird(420, 0);

  ground1 = new Ground(200, 600, 400, 400, [139,69,19]);

  ground2 = new Ground(width/2, height*15/16, width, height*1/8, [139,69,19]);

  // engine.timing.timeScale = 0;
}

function draw() {
  background(50);
  Engine.update(engine);

  // bird.move();

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
}