var canvas;
var music;

var floor1, floor2, floor3, floor4;
var colorCube;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
   floor1 = createSprite(100,570,195,20);
   floor1.shapeColor = "blue";

   floor2 = createSprite(300,570,195,20);
   floor2.shapeColor = "red";
   
   floor3 = createSprite(500,570,195,20);
   floor3.shapeColor = "green";

   floor4 = createSprite(700,570,195,20);
   floor4.shapeColor = "yellow";

    //create box sprite and give velocity
    colorCube = createSprite(700,540,30,30);
    colorCube.shapeColor = "white";
    
}

function draw() {
    background(rgb(169,169,169));

        //the controls
        if(keyDown("a")){
            colorCube.x = colorCube.x - 3;
        }
        if(keyDown("d")){
            colorCube.x = colorCube.x + 3;
        }
        if(keyDown("w")&& colorCube.y >= 545) {
            colorCube.velocityY = - 5;
        }
        colorCube.velocityY =colorCube.velocityY + 0.5;
        if(colorCube.y < 520){
          colorCube.y = 520;
        }

    //create edgeSprite 
    if(colorCube.y > 546){
        colorCube.y = 546
    }
    if(colorCube.y<546){
            colorCube.shapeColor = "white"; 
        
    }

    //add condition to check if box touching surface and make it box
        if(floor4.isTouching(colorCube)){
            colorCube.shapeColor = "yellow";
        }
        
        if(floor3.isTouching(colorCube)){
            colorCube.shapeColor = "green";
        }
        
        if(floor2.isTouching(colorCube)){
            colorCube.shapeColor = "red";
        }

        if(floor1.isTouching(colorCube)){
            colorCube.shapeColor = "blue";
        }
        
        

    drawSprites();
}
