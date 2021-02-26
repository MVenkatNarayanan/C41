const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

 var engine,world;
 var maxDrops=100;
 var drops,boys;
 var drops=[];

function preload(){
    
}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;
   
  boy=new Umbrella(240,677,800,10);
   // drops=new Drops(100,250,20,20);

    if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new createDrops(random(0,400),random(0,400)));
    }
  }
}

function draw(){
  background(0);
  
  Engine.update(engine)
    
  
  boy.display();
 //drop.display();

  switch(this.image){
    case 10:drops.image="images/thunderbolt/1.png";
      break;
      case 20:drops.image="images/thunderbolt/2.png";
      break;
      case 30:drops.image="images/thunderbolt/3.png";
      break;
      case 40:drops.image="images/thunderbolt/4.png";
      break;
      default:break;
  }
  
drawSprites();
textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}   

