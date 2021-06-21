var r=0, b=0, g=0;


function setup(){
  var redbtn = createButton("Red");
redbtn.mousePressed(redColor)
redbtn.position(100,50)
var greenbtn = createButton("Green")
greenbtn.mousePressed(greenColor)
greenbtn.position(200,50)
  }


function draw()
{
  background(r,g,b)
}
function greenColor(){
  r=0;
  g=255;
  b=0;
 }
function redColor(){
 r=255;
 g=0;
 b=0;
}