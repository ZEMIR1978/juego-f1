//Declaramos la variable del mariachi junto con su variable para precargar su imagen
var mariachi,mariachiImg;
//Declaramos la variable del esqueleto junto con su variable para precargar su imagen
var skeleton,skeletonImg;
//Declaromos la variable del piso
var world ;
var engine;
var floor;




//Creamos la funcion precargar
function preload(){
  //Precargamos la Img del mariachi
  mariachiImg = loadImage("Mariachi.png");
  //Precargamos la Img del mariachi
  skeletonImg = loadImage("esqueleto.png");

}
  
//creamos la funcion setup
function setup() {
  //CReamos el canvas del juego
  createCanvas(800,400);
  //creamos el motor fisico
  engine = Matter.Engine.create();
  //creamos el mundo 
  world = engine.world;
// creamos variable option para establecer valores
 var options = {isStatic : true};
  //creamos el piso
  floor = Matter.Bodies.rectangle(0,height -1,width*2,1,options);
  //agregamos el piso al mundo
  Matter.World.add(world,floor);
  //Creamos un sprite para el mariachi
  mariachi = createSprite(400, 200, 50, 50);
  mariachi.addImage("mariachi", mariachiImg)
  mariachi.scale = 0.09
  //creamos sprite para el esqueleto
  skeleton = createSprite(600,200,50,50)
  skeleton.addImage("esqueleto", skeletonImg)
  skeleton.scale = 0.5


}


//Creamos la funcion dibujar
function draw() {
  //Establecemos el fondo del juego
  background(255,255,255); 

  //Dibujamos los sprites
  drawSprites();

  Matter.Engine.update(engine)

  rect(floor.position.x,floor.position.y,width*2,1)




  //Movimiento del mariachi
  if(keyDown("left_arrow")){
    mariachi.x = mariachi.x - 3;
  }

  if(keyDown("right_arrow")){
    mariachi.x = mariachi.x + 3;
  }

  if(keyDown("space")){
    mariachi.velocityY = -5;

  }

  //Graavedad del mariachi
  mariachi.velocityY += 0.8;
}