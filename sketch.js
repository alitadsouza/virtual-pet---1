//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;


function preload(){
  //load images here
  dog = loadImage("images/dog.png");
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
  database = firebase.database
	createCanvas(500,500);
  dog = createSprite(200,200);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
backGround(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  text("Press UP_ARROW Key to feed Drago milk")
  textSize(10);
  fill("red");
  stroke(Text);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



