
var moving;

var fixed;

var going;

var start;

function setup() {
  createCanvas(800,400);
  moving=createSprite(100, 200, 50, 50);
  moving.shapeColor="blue"
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="purple"
  going=createSprite(200, 100, 50, 50);
  going.shapeColor="green"
  start=createSprite(150, 10, 50, 50);
  start.shapeColor="green"
}

function draw() {
  background(105,205,215); 
  moving.x=World.mouseX 
  moving.y=World.mouseY 

  if(isTouching(going, moving)){
    moving.shapeColor="pink"
    going.shapeColor="magenta"
    
  }
  else {moving.shapeColor="blue"
  going.shapeColor="purple"
}


repel(moving, fixed)
repel(moving, going)
repel(moving, start)
  drawSprites();
}