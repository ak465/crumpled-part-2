const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImage,bin;

function preload(){
  binImage = loadImage("image/dustbingreen.png");

}


 function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprites(964,520,20,20);
    bin.addImage(binImage);
    bin.scale = 0.45;
 
    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
 }

 function draw() {
    background(0);
    Engine.update(engine);


    //text(mouseX+ ","+mouseY,2000,200);


    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.dispaly();

    drawSprites();

 }

 function keyPressed(){
   if(keyCode === UP_ARROW){
       Matter.Body.applyforce(crumpledPaper.body,crumpledPaper.body.position, {x:15, y:-15});
   }
 }
    


