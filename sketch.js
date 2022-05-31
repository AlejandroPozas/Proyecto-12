var path,runner, leftBoundary,rightBoundary;
var pathImg,runnerImg;
var i;

function preload(){
  runner = loadAnimation("Jake.1.png","Jake.2.png","Jake3.png","Jake.4.png","Jake.5.png",);
  path = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  path = crateSprite(400,400,400,400);
  path.addImage("path", path);
  path.y = path.width /2;
  path.scale=1.2;

  runner = createSprite(50,160,20,50);
  runner = addAnimation("running", runner);
  runner.scale=0.5;
  
  //crear left Boundary (límite izquierdo)
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  //crear right Boundary (límite derecho)
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  runner.x = WorldX;
  
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(rightEdge)
  runner.collide(leftEdge)

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
