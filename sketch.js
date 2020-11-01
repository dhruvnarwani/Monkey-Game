
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obstacleGroup
var ground
var bananaGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 400);
  
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;
  
obstacleGroup = createGroup();
bananaGroup = createGroup();
  
survivalTime = 0;

}


function draw() {
background(180);

fill("black");
text("Survival Time: " + survivalTime, 300, 50);

survivalTime = survivalTime + Math.round(getFrameRate()/60);

  
if(keyDown("space") && monkey.y >=300){
monkey.velocityY = -16;

}

monkey.velocityY = monkey.velocityY + 0.8
  
if (ground.x < 200){
      ground.x = ground.width/2;
    }
    
monkey.collide(ground);
  
obstacles();
food();
  
  
  drawSprites();
}

function food(){
if (frameCount %80 === 0){
banana = createSprite(550, 200, 10,40);
banana.addImage("bana", bananaImage);
banana.y = Math.round(random(120,200));
banana.scale = 0.1;
banana.velocityX = -5;
banana.lifetime = 110;
bananaGroup.add(banana);
}
}

function obstacles(){
if (frameCount % 300 === 0){
obstacle = createSprite(500,325,10,40);
obstacle.addImage("obs", obstacleImage);
obstacle.velocityX = -4;
obstacle.lifetime = 150;
obstacle.scale = 0.1;
}
}




