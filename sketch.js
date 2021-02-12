var police,policeimg, thief, thiefimg;

var rocks,ground;

var powerUps, lifeimg, life1,life2,life3;

function preload(){
policeimg=loadAnimation("P1.png","P2.png");
thiefimg=loadImage("download.png");
lifeimg=loadImage("images.png");

}
function setup(){
createCanvas(1200,600);

police=createSprite(200,450,50,100);
police.addAnimation("police",policeimg);

thief=createSprite(1000,490,100,100);
thief.addImage("thief",thiefimg);

life1=createSprite(50,50,20,20);
life1.addImage("life1",lifeimg);

life2=createSprite(100,50,20,20);
life2.addImage("life2",lifeimg);

life3=createSprite(150,50,20,20);
life3.addImage("life3",lifeimg);
}
function draw(){
background(255);

drawSprites();
}