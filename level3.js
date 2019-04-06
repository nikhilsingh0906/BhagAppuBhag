var appu, speed=10, platform, gravity=0.3, jumpCount=0, end=0;
var sun, sun1, n, knife, bulletImage, score = 0;
var b;
var bullet;
var angel, demon, speedD = 2.5;

function preload(){

}

function setup(){
  createCanvas(1500,600);
  appu=createSprite(20,450);
  platform=createSprite(600,580);
  bulletImage=loadImage("newPNG/bullet.png");
  platform.addAnimation("ground","newPNG/04.png");
  appu.addAnimation("stop","chart/frame-1.png");
  appu.addAnimation("walk","chart/walk001.png","chart/walk006.png");
  platform.setCollider("rectangle",0,0,15000,60);
  appu.setCollider("rectangle",0,0,50,50);
  bullets=new Group();

  angel = createSprite(random(0,width),0, 50,50);
  angel.addImage(loadImage("newPNG/angel.png"));
  demon = createSprite(random(0,width),0,25,25);
  demon.addImage(loadImage("newPNG/demon.png"));
}

function draw() {
  if(end==0) {
    appu.velocity.y+=gravity;
    background(200);
    //appu movements
  if(appu.collide(platform)) {
    jumpCount=0;
    appu.velocity.y=0;
  }
  //if(keyWentDown("UP_ARROW")) {
    //if(jumpCount<2)
    //{
      //appu.changeAnimation("stop");
      //appu.velocity.y=-10;
      //jumpCount+=1;
    //}
 //}

 else if(keyDown("RIGHT_ARROW")) {
   appu.mirrorX(1);
   appu.changeAnimation("walk");
   appu.velocity.x=speed;
   b=1;
 }

  else if(keyDown("LEFT_ARROW")) {
    appu.mirrorX(-1);
    appu.changeAnimation("walk");
    appu.velocity.x=-speed;
    b=0;
  }

  else {
    appu.changeAnimation("stop");
    appu.velocity.x=0;
  }
  if(keyWentDown("x")) {
    bullet = createSprite(appu.position.x,appu.position.y);
    bullet.addImage(bulletImage);

    bullet.life=500;
    if(b==1) {
      bullet.velocity.y=-50;
    }
      bullet.velocity.y=-50;
    }
    // bullets.add(bullet);
  if (demon.position.y >= height - 20 || angel.position.y >= height - 20) {
    end = 2;
  }
  if(angel.collide(appu)) {
    angel.position.y = 0;
    angel.position.x = random(0, width);
    score++;
  }
  if((Math.abs(demon.position.x - appu.position.x) <=30)&& keyWentDown("x")){
    demon.position.y = 0;
    demon.position.x = random(0, width);
    score++;
  }
  if(appu.position.x < 0) {
    appu.position.x = width;
  }
  if(appu.position.x > width) {
    appu.position.x = 0;
  }
  textAlign(CENTER);
  text("Score : " + score, 30,10);
  angel.velocity.y = speedD;
  demon.velocity.y = speedD;
  drawSprites();
}
else {
  textSize(50);
  textAlign(CENTER);
  //console.log("APPU is the greatest of all");
  text("GAME OVER\nIT'S NOT THAT EASY!!!!\n You did well though\nYour Score was " + score, width/2, height/2);
  }

  // appu.velocity.y+=gravity;

}
