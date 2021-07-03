var mario;
var platformGroup;

function preload()
{}

function setup() {
  createCanvas(displayWidth, displayHeight);
  var countDistanceX = 0;
  var platform;
  var gap;

  mario = new Player();
  platformGroup= createGroup();
  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
   }
 
}

function draw() {
  background('skyblue');  
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  translate (-mario.spt.x +width/2,0)
  if(keyDown("right")){
    mario.moveRight()
    }
    if(keyDown("left")){
      mario.moveLeft()
    }
    if(keyDown("up")){
     mario.moveUp()
    }
  drawSprites();
}





