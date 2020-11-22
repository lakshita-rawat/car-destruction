var car, wall,wallImage;
var speed, weight;
var deformation;


function preload(){
  
  wallImage=loadImage("wall.jpg");

}

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 80, 50);
  wall=createSprite(790,200,60,height/2);  
  wall.shapeColor=rgb(86, 50, 168);
  wall.addImage("wall",wallImage);
  speed=random(55,90);
  weight=random(400,1500);
} 

function draw() {
 // background(255,255,255);
 background("");
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
  drawSprites();
  carDeformation();
}
function carDeformation(){
  if(car.x-wall.x<car.width/2+wall.width/2
    &&wall.x-car.x<wall.width/2+car.width/2){
      car.velocityX=0;
      if(deformation<100){
        car.shapeColor="green";
      }
      if(deformation<180&&deformation>100){
        car.shapeColor="yellow";
      }
      if(deformation>180){
        car.shapeColor="red";
      }
    }
 
  
}