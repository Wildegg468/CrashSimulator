var car,wall;
var speed,weight;
var mouseCatcher;



function setup() {
createCanvas(windowWidth,windowHeight);

car = createSprite(100, 300, 50, 50);
car.shapeColor = "white";

wall = createSprite(1200,300,60,height/2);

mouseCatcher = createSprite(width/2,height/2,width,height);
mouseCatcher.visible = false;


}

function draw() 
{
background("black");  

if(touches.lenth > 0 ||  mousePressedOver(mouseCatcher))
{
touches = [];  

car.x = 100;
car.y = 300;

speed = random(55,90);
weight = random(400,1500);

car.velocityX = speed;
car.shapeColor = "white";

}

if(wall.x - car.x < wall.width/2 + car.width/2)
{
car.velocityX = 0;

var deformation = 0.5*weight*speed*speed/22500;

if(deformation < 80)
{
car.shapeColor = ("lime");  
}
if(deformation > 80 && deformation < 180)
{
car.shapeColor = "yellow";
}
if(deformation > 180)
{
car.shapeColor = " red";
}







}

console.log(car.velocityX)

car.collide(wall);

fill("white");
textSize(20);
text("Click Or Tap To Reset",50,50);

drawSprites();
}