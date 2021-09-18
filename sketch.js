var sea ,seaimg
var ship,

function preload(){
seaimg = loadImage("sea.png")
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createsprite(400,400)
  sea.addImage(seaimg)
  ship = createsprite()
}

function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x=sea.width / 2;
  }
  
 drawsprite()
}