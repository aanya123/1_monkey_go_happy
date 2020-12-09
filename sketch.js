
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,50,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.2
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  obstacleGroup = new Group()
  foodGroup = new Group()

}


function draw() {
background("lightblue")
 monkey.collide(ground)
  if(ground.x<0){
    ground.x = 400
  }
  if(keyDown("space")){
    monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY+0.5
  spawnFood();
  spawnStone();
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityEach(0,0)
    foodGroup.setVelocityEach(0,0)
    ground.velocityX = 0
  }
drawSprites()
  
}
function spawnFood(){
  if(frameCount%80===0){
    banana = createSprite(600,250,40,10)
    banana.y = random(100,200)
banana.addImage(bananaImage)  
    banana.velocityX = -3
    banana.scale = 0.1
    foodGroup.add(banana)
  }
}
function spawnStone(){
  if(frameCount%200===0){
    stone = createSprite(600,325,40,10)
stone.addImage(obstacleImage)  
    stone.velocityX = -3
    stone.scale = 0.2
    stone.collide(ground)
    obstacleGroup.add(stone)
}
}



