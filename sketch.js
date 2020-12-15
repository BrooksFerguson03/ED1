function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight (2);
  stroke(200,100,89);
  background (225,150,200)

}

function draw() {
  translate (30,30);
  var num =12;
  var shift =22;
  var width= innerWidth-2*30;
  var length= innerWidth;
  var sideLen = (width/num);
  var space = 9;


  for (var x=0; x< num*sideLen; x= x+sideLen){
    for(var y=0; y <num*sideLen; y=y+sideLen ){
      fill(random(200,255),random(90,255),random(226,255),115);
      quad(x+ random (-shift,shift)+space,y+ random (-shift,shift)+space,x+sideLen+ random (-shift,shift)-space,y+ random (-shift,shift)+space,x+sideLen+ random (-shift,shift)-space,y+sideLen+ random (-shift,shift)-space,x+ random (-shift,shift)+space,y+sideLen+ random (-shift,shift)-space);
      
 
}
    }
 
  
  noLoop();
}
