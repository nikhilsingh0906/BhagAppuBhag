  // Get to the final lane and jump to win. Avoid ghost and stay alert.//
	var lb1,lb2;
	var appu,surprise,monster1, monster2,knife1,knife2,end=0;
	var speed = 5, gravity = .3, bounce_speed = -8.5 ,knife_flag,flag=0;

	function setup() {
		createCanvas(1500,800);
		appu=createSprite(350,10);
		lb1=createSprite(375,100);
		lb1.addImage(loadImage("newPNG/lb.png"));
		lb2=createSprite(1120,250);
		lb2.addImage(loadImage("newPNG/lb.png"));
		lb3=createSprite(375,400);
		lb3.addImage(loadImage("newPNG/lb.png"));
		lb4=createSprite(1120,550);
		lb4.addImage(loadImage("newPNG/lb.png"));
		lb5=createSprite(375,700);
		lb5.addImage(loadImage("newPNG/lb.png"));
		appu.addAnimation("stop","chart/frame-1.png");
  	    appu.addAnimation("walk","chart/walk001.png","chart/walk006.png");
	  monster1=createSprite(10,0);
	  monster1.addAnimation("stop","chart/monster.png");	  
      monster2=createSprite(1300,160);
	  monster2.addAnimation("stop","chart/monster.png");
	  knife1= createSprite(1700,340,50,10);
     knife1.addImage(loadImage("chart/chaku.png"));
     knife2= createSprite(-200 ,490, 50, 10);
     knife2.addImage(loadImage("chart/chaku.png"));
  
		  }
	function draw() {

		background(150);
		if(appu.position.x<20)
		{
			appu.position.x=25;
		}
		
		
  	if(appu.collide(lb1))
		{
			appu.velocity.y=0;
			flag=0;
		}
  	if(appu.collide(lb2))
		{
			appu.velocity.y=0;
			flag=0;
		}
		if(appu.collide(lb3))
		{
			appu.velocity.y=0;
			flag=0;
		}
		if(appu.collide(lb4))
		{
			appu.velocity.y=0;
			flag=0;
		}
		if(appu.collide(lb5))
		{
			appu.velocity.y=0;
			flag=0;
		}
		if(keyDown(RIGHT_ARROW)) {
     appu.changeAnimation("walk");
     appu.mirrorX(1);
     appu.velocity.x = speed;
 }

	  else if(keyDown(LEFT_ARROW)) {
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
	  appu.velocity.y+=gravity;

      if(knife1.collide(appu))
      {
      	appu.remove();
      	knife1.remove();
      	end=1;
      }
     if (knife2.collide(appu))
     {
     	appu.remove();
     	knife2.remove();
      end=1;
  }
      monster1.attractionPoint(0.07,appu.position.x,appu.position.y);
      maxSpeed=3;
      monster2.attractionPoint(0.07,appu.position.x,appu.position.y);
      maxSpeed=2;
    if(appu.position.y >=250 && flag == 0){

  knife1.velocity.x -= 5;

}
if(appu.position.y>=400&&flag==0){
 
 	knife2.velocity.x+=5;
 } 
 if(appu.collide(monster1)||appu.collide(monster2))
  {
	 	appu.remove();
	 		end=1;
	 	}

 if(end==1)
 {  textSize(50);
 	text("LOSER",width/2,height/2);
 } 
if (appu.position.x<350&& appu.position.y>height/2)
{   textSize(50);
	text("WINNER",width/2,height/2);
	appu.remove();
}

drawSprites();
}
