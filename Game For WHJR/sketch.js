


var mario1;
var mario2;
var mario3;
var mario4;
var mario5;
var mario6;
var marioblock;
var marioblock1;
var marioblock2;
var marioblock3;
var marioblock4;
var marioblock5;
var marioblock6;
var marioblock7;
var marioblock8;
var marioblock9;
var marioblock10;
var marioblock11;
var marioblock12;
var marioblock13;
var marioblock14;

function preload() {
  mario1Img = loadImage('mario1.png');
  mario2Img = loadImage('mario1.png');
  mario3Img = loadImage('mario1.png');
  mario4Img = loadImage('mario1.png');
  mario5Img = loadImage('mario1.png');
  mario6Img = loadImage('mario1.png');
  marioblockImg = loadImage('marioblock.png');

  
}


function setup() {
  createCanvas(800,400);
  var mario = createSprite(400, 200, 20, 20);
  var marioblock = createSprite(400, 200, 20, 20);
  var marioblock1 = createSprite(400, 200, 20, 20);
  var marioblock2 = createSprite(400, 200, 20, 20);
  var marioblock3 = createSprite(400, 200, 20, 20);
  var marioblock4 = createSprite(400, 200, 20, 20);
  var marioblock5 = createSprite(400, 200, 20, 20);
  var marioblock6 = createSprite(400, 200, 20, 20);
  var marioblock7 = createSprite(400, 200, 20, 20);
  var marioblock8 = createSprite(400, 200, 20, 20);
  var marioblock9 = createSprite(400, 200, 20, 20);
  var marioblock10 = createSprite(400, 200, 20, 20);
  var marioblock11 = createSprite(400, 200, 20, 20);
  var marioblock12 = createSprite(400, 200, 20, 20);
  var marioblock13 = createSprite(400, 200, 20, 20);
  var marioblock14 = createSprite(400, 200, 20, 20);

  marioblock.addImage(marioblockImg)
  marioblock1.addImage(marioblockImg)
  marioblock2.addImage(marioblockImg)
  marioblock3.addImage(marioblockImg)
  marioblock4.addImage(marioblockImg)
  marioblock5.addImage(marioblockImg)
  marioblock6.addImage(marioblockImg)
  marioblock7.addImage(marioblockImg)
  marioblock8.addImage(marioblockImg)
  marioblock9.addImage(marioblockImg)
  marioblock10.addImage(marioblockImg)
  marioblock11.addImage(marioblockImg)
  marioblock12.addImage(marioblockImg)
  marioblock13.addImage(marioblockImg)
  marioblock14.addImage(marioblockImg)
  
  
  

  
}

function draw() {
  background(255,255,255);  
  drawSprites();


  


}