//Create variables here
 var dog,happyDog,database,foodS,foodStock;

function preload()
{ 
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
	
}

function setup() {
  createCanvas(500,500);
  database=firebase.database()
  database.ref("Food").on("value",readStock)
  dog=createSprite(250,350)
  dog.addImage(dogImg)
  dog.scale=0.5

}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  if (keyWentUp(UP_ARROW)){
    dog.addImage(dogImg)
  }
  drawSprites();
  //add styles here
  fill("brown")
  stroke("black")
text("FoodStock: "+foodS,340,70)

}

//Function to read values from DB
function readStock(data){
  foodS=data.val()
}
//function to write values from DB
function writeStock(x){
  if(x<=0){
    x=20;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



