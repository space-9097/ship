var ship, bouncing_ship, edges;
var sea1;
var seaimg;
function preload(){
  bouncing_ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,800);

  ship = createSprite(50,160,20,50);
  ship.addAnimation("bouncing", bouncing_ship);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50
  sea1=createSprite(300,180,600,10)
  sea1.addImage(seaimg);
  sea1.velocityX=-4
  seaimg.scale = 0.05
}



function draw() {
  background("white");
 
  console.log(sea1.x)
  if (sea1.x<0) {
    sea1.x=300
  }

  if(keyDown("space")){
    ship.velocityY=-10;
  }

  ship.velocityY = ship.velocityY + 0.5;
  drawSprites();
}