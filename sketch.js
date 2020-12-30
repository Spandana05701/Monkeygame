var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {
  
 monkey = createSprite(80,315,20,20)
 monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
}

function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")){
    monkey.velocityY = -12;
  }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
    
   
  monkey.collide(ground);

  spawnObstacles();
  spawnFood();
  drawSprites();
}

function spawnFood(){
  if(frameCount%80===0){
    banana = createSprite(350,150,20,30);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifitime = 150;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(350,320,20,30);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle);
  }
}


