  var platform1, platform2, plate, flag = 0;
  var speed = 5, gravity = .3, bounce_speed = -8, speedp = 3;
  var appu, surprisebox;
  var surprise=false;
  function setup() {
    createCanvas(1500,600);
    platform1 = createSprite(200 ,height - 150, 450, 300);
    platform2 = createSprite(width - 200, height - 150, 400, 300);
    platform1.addImage(loadImage("newPNG/01.png"));
    platform2.addImage(loadImage("newPNG/01.png"));
    plate = createSprite(width/2, 250, 100, 20);
    plate.addImage(loadImage("newPNG/02.png"));
    appu = createSprite(30,20);
    appu.addAnimation("stop","chart/frame-1.png");
    appu.addAnimation("walk","chart/walk001.png","chart/walk006.png");
    surprisebox = createSprite(1250,-50);
    surprisebox.addImage(loadImage("newPNG/03.png"));
  }

  function draw() {
    background(200);
    // console.log(platform1.position.x, platform1.position.y);
    plate.position.x += speedp;
    if (plate.position.x > width - 400 - 50) {
      plate.position.x -= 3;
      speedp = speedp * -1;
    }
    else if(plate.position.x < 400 + 50) {
      plate.position.x += 3;
      speedp = speedp * -1;
    }
    if(appu.collide(platform1) && (platform1.position.y - 150) - (appu.position.y + 40) <= 10) {
      appu.velocity.y = 0;
      flag = 0;
    }
    else if(appu.collide(platform2) && (platform2.position.y - 150) - (appu.position.y + 40) <= 10) {
      appu.velocity.y = 0;
      flag = 0;
    }
    else if(appu.collide(plate) && (plate.position.y - 10) - (appu.position.y + 40) <= 10) {
      appu.velocity.y = 0;
      appu.position.x += speedp;
      // console.log(speedp);
      flag = 0;

    }

    if(keyDown(RIGHT_ARROW))
    {
       appu.changeAnimation("walk");
       appu.mirrorX(1);
       appu.velocity.x = speed;
    }
    else if(keyDown(LEFT_ARROW))
    {
       appu.changeAnimation("walk");
       appu.mirrorX(-1);
       appu.velocity.x = -1*speed;
    }

    else {
      appu.changeAnimation("stop");
      appu.velocity.x = 0;
    }

    if(keyWentDown(UP_ARROW) && flag < 1) {
          appu.velocity.y = bounce_speed;
          flag += 1;
    }

    if(appu.position.y < 0)
        appu.position.y = 0;

    if(appu.position.x>=1100)
    {

      surprisebox.position.y +=3.7 ;
    }
    surprisebox.collide(platform2);//upar se aa raha hai
    if(appu.collide(surprisebox)) {
      console.log(surprisebox.position.x, surprisebox.position.y);
      surprise = true;
    }
    if(appu.position.y > height) {
      surprise = true;
    }
    if(surprise) {
      appu.remove();
      textSize(30);
      // textAlign("CENTER");
      text("GAME OVER!\nHA HA HA HA HA......",650,300);
    }

    if(appu.position.x < 10) {
      appu.position.x = 10;
    }

    if(appu.position.x > width) {
      textSize(30);
      text("YOU WON!\nGo to the next level",450,300);
      appu.remove();
    }

    appu.velocity.y += gravity;
    drawSprites();
  }
