//Create variables here
var dogImage1;
var dogImage2;
var chickenImage;
var database=firebase.database();
var foodstock;
var Dog;


function preload()
{
  //load images here
  dogImage1=loadImage("images/Dog.png");
  dogImage2=loadImage("images/happydog.png");
  chickenImage=loadImage('images/Chicken.png')
}

function setup() {
  createCanvas(1000, 500);
  Dog = createSprite(550,250,10,10);
  Dog.addImage(dogImage1);
  Dog.scale=0.2;
  
  database=firebase.database();
  foodstock=database.ref('Food');
  foodstock.on=("value",readStock,writeStock);

  
}


function draw() {  
background(46,139,87)


if(keyWentDown(UP_ARROW)){
  writeStock(foodstock);
  dog.addImage("dogImage1");
  dog.addImage("dogImage2");


image(dogImage1,10,10);
}
  drawSprites();
  //add styles here
stroke("Red");
textSize(20);
text("Now press Up_Arrow key to feed Chicken",40,40);
  

}
  



function readStock (data){


  foodstock=data.val(x);

}

function writeStock() {

if(x<=0){
x=0;
}else{
x=x+1;


}

  database.ref('Food/20').update({
  })
}










