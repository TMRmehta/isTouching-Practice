var fixedRect,movingRect;
var car,ball;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite( 600,100,50,50);
  movingRect.shapeColor="green";
  car=createSprite(100,100,50,50)
  car.shapeColor="blue"
  car.velocityX=5;
  ball=createSprite(500, 100,50,50)
  ball.shapeColor="orange"
}

function draw() {
  background(0,0,0);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    ) {
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
  }
 
  if(car.x-ball.x<car.width/2+ball.width/2
    && ball.x-car.x<car.width/2+ball.width/2
    && ball.y-car.y<car.height/2+ball.height/2
    && car.y-ball.y<car.height/2+ball.height/2
    ) {
    car.velocityX=(-1)*car.velocityX;
  }
 
  drawSprites();
  
}