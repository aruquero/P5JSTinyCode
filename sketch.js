y=0;q=499;r=205;g=92;b=92;aux=1;
setup=_=>{createCanvas(500,500)}
draw=_=>{
  background(0);
  y+=aux;
  if(y > 499 && aux ==1){y=0}
  if(y < 0 && aux ==-1){y=499}
  stroke(255);
  line(0,y,q,y);
  fill(r,g,b);
  rect(0,0,499,y);
  if(y == 0){r= random(0,255);g= random(0,255);b= random(0,255);}
  fill(255,255,255)
  text("Flecha superior e inferior para cambiar la dirección del barrido",5,15);
  text("BackSpace para parar, la tecla de borrar",5,30);
}

keyPressed=_=>{
  switch(keyCode){
    case UP_ARROW:aux=-1;break;
    case DOWN_ARROW:aux=1;break;
    case BACKSPACE:aux=0;break;
  }
}