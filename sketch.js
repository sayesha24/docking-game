var bg_img;
var iss, iss_img;
var spaceCraft, craftImg1, craftImg2, craftImg3, craftImg4;
var docked;

function preload(){

  //to load the images

  bg_img= loadImage("spacebg.jpg");

  iss_img= loadImage("iss.png");

  craftImg1= loadImage("spacecraft1.png");
  craftImg2= loadImage("spacecraft2.png");
  craftImg3= loadImage("spacecraft3.png");
  craftImg4= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1000,800);

  //to create the sprites and add properties to them

  spaceCraft= createSprite(400, 610, 50, 50);
  spaceCraft.addImage(craftImg1);
  spaceCraft.scale= 0.3;
  
  iss= createSprite(520, 370, 50, 50);
  iss.addImage(iss_img);
  iss.scale= 1.3;

  docked= false;
  
}

function draw() {

  //to add the background image
  background(bg_img);  

  //to see the x and y position of the spacecraft
  console.log(spaceCraft.x);
  console.log(spaceCraft.y);

  //to check if the spacecraft is on the particular position then the following actions will take place
 if(spaceCraft.x - iss.x=== Math.round(95) && spaceCraft.y=== 516){

  //to set docked to true  
  docked= true;

  spaceCraft.x + spaceCraft.x + random(0, 0);

  //to notify the player that the spacecraft has been docked
   textSize(30);
   fill("white");
   text("DOCKING SUCCESSFUL!", 300, 700);
   
 
  }

  //to give actions of when the spacecraft is not docked
  if(!docked){

    //to set a random position for the spacecraft
    spaceCraft.x= spaceCraft.x + random(-1, 1);
    

    //to move and change the image of the spacecraft according to the key pressed
    if(keyDown("UP_ARROW")){
  
      spaceCraft.y += -1;
    }
  
    if(keyDown("LEFT_ARROW")){
  
      spaceCraft.x += -1;
      spaceCraft.addImage(craftImg3);
    }
  
    if(keyDown("RIGHT_ARROW")){
  
      spaceCraft.x += 1;
      spaceCraft.addImage(craftImg4);
    }
  
    if(keyDown("DOWN_ARROW")){
  
      spaceCraft.y += 1;
      spaceCraft.addImage(craftImg2);
    }

  
  }
   
  //to make the sprites visible
  drawSprites();
}