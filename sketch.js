y=0;q=499;r=205;g=92;b=92;
setup=_=>{createCanvas(500,500)}
draw=_=>{
  background(0);
  y-=1;
  y=(y<0)?q:y;
  stroke(255);
  line(0,y,q,y);
  fill(r,g,b);
  rect(0,0,499,y);
  if(y == 0){
    r= random(0,255);
    g= random(0,255);
    b= random(0,255);
  }
}