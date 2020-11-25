const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var polygon;
var point;
var score,backgroundimg;

function preload(){
  backgroundimg = loadImage("bg.png");
  getBackgroundimg();
}

function setup() {
  createCanvas(800,400);


  engine=Engine.create();
  world=engine.world;



  ground=new Ground(400,400,900,30);
  stand=new Ground(400,180,220,10);
  polygon=new Ball(50,200,35);
  box1=new Box(320,150,30,30);
  box2=new Box(350,150,30,30);
  box3=new Box(380,150,30,30);
  box4=new Box(410,150,30,30);
  box5=new Box(440,150,30,30);
  box6=new Box(337,120,30,30);
  box7=new Box(367,120,30,30);
  box8=new Box(397,120,30,30);
  box9=new Box(427,120,30,30);
  box10=new Box(353,90,30,30);
  box11=new Box(383,90,30,30);
  box12=new Box(413,90,30,30);
  box13=new Box(369,60,30,30);
  box14=new Box(399,60,30,30);
  box15=new Box(390,0,30,30);
  point=new Point(polygon.body,{x:150,y:50})
  score=0;

 



  Engine.run(engine);
}

function draw() {
  if(backgroundimg){
    background(backgroundimg); 
  }
   
Engine.update(engine);
  text("SCORE: "+score,700,40);

  ground.display();
  stand.display();
  polygon.display();
  fill("yellow")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("blue")
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill("purple")
  box10.display();
  box11.display();
  box12.display();
  fill("green")
  box13.display();
  box14.display();
  fill("red")
  box15.display();
  point.display();

  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    point.fly();
}

function keyPressed()
{
    if(keyCode===32){
        point.attach(this.polygon);
    }
}

async function getBackgroundimg()
{
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseinjson=await response.json();
    var time=responseinjson.datetime.slice(11,13);
    if(time>=06&&time<=18){
        bg="bg.png"
    }
    else{
        bg="bg2.jpg"
    }
    backgroundimg=loadImage(bg);
}