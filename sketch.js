let imagenFondo;
let imagenInicio;
let personaje;
let x = 0;
let posY = 100;
let dY = 3;
let estado = 0; // 0: menu ; 1: jugando
let wallX = [];
let wallY = [];
let pared;
puntaje = 0;
puntajeMax = 10;
recordAnterior = 0;

function preload() {
  // put preload code here
  imagenFondo = loadImage("./images/fondojuego00.png");
  imagenInicio = loadImage("./images/images.jpg");
  personaje = loadImage("./images/miku00.gif");
  pared = loadImage("./images/pared.png");
}

function setup() {
  // put setup code here
  createCanvas(1000,512)
  noCursor();
}

function draw() {
  // put drawing code here
  if (estado == 1){
    imageMode(CORNER);``
    background(255)
    image(imagenFondo,x,0);
    image(imagenFondo, x + imagenFondo.width,0);
    x = x-5;
    dY = dY + 1;
    posY = posY + dY;
    if(x <= -imagenFondo.width){
      x = 0;
      
    }
    // obstaculos
    for (let i=0; i<wallX.length; i++){
      imageMode(CENTER);
      image(pared,wallX[i],wallY[i]- 500)
      image(pared,wallX[i],wallY[i] + 500)
      if(wallX[i] < 0 ){
        wallX[i] = width;
        wallY[i] = random(200,300);
      }
          //puntaje
         if(wallX[i] == 100){
          puntaje+=1;
          puntajeMax = max(puntajeMax,puntaje);
          }
      wallX[i] = wallX[i] -5; // para que se muevan los obstaculos
    }

    // personajes
    image(personaje,100,posY,60,60);
    text("Puntaje: " + puntaje,width/2 - 60 ,30);
}else if (estado === 0 ){
    cursor();
    image(imagenInicio,0,0)
    textSize(50);
    fill(255);
    text("Puntaje maximo: " + puntajeMax,600,100);
    text("Haga click para comenzar",600,200);
  }
}
function mousePressed(){
  //posY = 100;
  if (estado === 0 ){
    estado = 1
    posY = 100;
    dY = 3;
    x = 0;
    wallX = [500,800,1100];
    wallY[0] = random(200,100)
    wallY[1] = random(200,100)
    wallY[2] = random(200,100)
    puntaje = 0;
    recordAnterior = puntajeMax
    noCursor();
  }
  dY = -15;
}
