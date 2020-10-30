var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400,400);

  
    var survivalTime=0;

  
      ground = createSprite(400,350,900,10);
      ground.velocityX=-4;
      ground.x=ground.width/2;


  
      monkey = createSprite(80,315,20,20);
      monkey.addAnimation("moving",monkey_running);
      monkey.scale=0.1;
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
}

function draw() {
    background("white");

  if(ground.x<0) {
    ground.x=ground.width/2;
  }
   

  
  if(keyDown("space") && monkey.y >= 200){
         monkey.velocityY=-12 

      }
  
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);

    monkeyFood();
    monkeyObstacles();
  
      drawSprites();

  
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: " +score,500,50);
  
   
  if(obstaclesGroup.isTouching(monkey)){
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    
    monkey.velocityY=0;
    ground.velocityX=0;

     }

    stroke("black");
    textSize(20);
    survivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time:"+survivalTime,100,50)
  
  
  console.log(ground.y);
  
      
 
     
   

}
      function monkeyFood (){
       if(frameCount % 80 === 0){
        banana = createSprite(600,200,20,35);
        banana.y=Math.round(random(120,200));
        banana.addImage(bananaImage);
        banana.scale=0.10;
        banana.velocityX=-4;
        banana.lifetime=300;

        FoodGroup.add(banana);
       }
      }

      function monkeyObstacles (){
        if(frameCount % 300 === 0){
          obstacle = createSprite (800,315,30,30);
          obstacle.addImage(obstacleImage);
          obstacle.scale=0.15;
          obstacle.velocityX=-5 
          obstacle.lifetime=300;

          obstaclesGroup.add(obstacle);
        }
      }



