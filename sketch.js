var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10);
}

function draw() {
  background(30);
  drawSprites();
  //ball.velocityX = 0
  if (keyDown(RIGHT_ARROW)){
    //ball.velocityX = 3
    ball.position.x = ball.position.x + 2
  }
  if (keyWentDown(LEFT_ARROW)){
    ball.velocityX = -2
  }
  if (keyWentUp(LEFT_ARROW)){
    ball.velocityX = 0;
  }
  
}




