var trex ,trex_running;
var edges;
var ground;
var groundImg;

function preload(){
  
  trex_running = loadAnimation("Man1.png","Man2.png","Man3.png","Man4.png","Man5.png","Man6.png");
  groundImg = loadImage("ground2.png")


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160, 20,50);
  trex.addAnimation("running",trex_running);
  trex.scale= 0.05
  
  ground = createSprite(200,180,400,1);
  ground.addImage("ground", groundImg);
  ground.scale = 1
  ground.x=ground.width/2
 
  edges = createEdgeSprites();
}

function draw(){
  background("white")
  
  ground.velocityX =-3
  if(ground.x < 0){
    ground.x=ground.width/2
  }

  if(keyDown("space")){

    trex.velocityY=-8
  }
  trex.velocityY+= 1
  trex.collide(ground)
  drawSprites();
}
