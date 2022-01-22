var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climberGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,150);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.4;
  ghost.velocityY = 10;
  doorsGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("SPACE")){
      ghost.velocityY = -10;
    }
    
    ghost.velocityY = ghost.velocityY + 0.8;
    if(keyDown("RIGHT")){
      ghost.x = ghost.x + 4;
    }
    if(keyDown("LEFT")){
      ghost.x = ghost.x -4;
    }
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    spawnDoors();
    drawSprites();
}

function spawnDoors() {
  
  if (frameCount % 180 === 0) {
    var door = createSprite(200,120,40,10);
    door.x = Math.round(random(120,400));
    door.addImage(doorImg);
    door.velocityY = 2;
    doorsGroup.add(door);
    climber = createSprite(200,180,40,10);
    climber.addImage(climberImg);
    climber.x = door.x;
    climber.velocityY= 2;
   // invisibleBlock = createSprite()
    climberGroup.add(climber);
  }
}