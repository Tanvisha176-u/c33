var bg 
var character,chImage
function preload()
{
bg = loadImage ("snow2.jpg")
chImage = loadImage("shinchan.jpg")
}

function setup() {
  createCanvas(800,400);

 character = createSprite(400, 200, 50, 50);
 character.addImage(chImage)
 character.scale = 0.3
}


function draw() {
  background(bg);  
  drawSprites();
}