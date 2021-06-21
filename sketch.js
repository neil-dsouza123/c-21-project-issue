var canvas;
var surface1
var surface2
var surface3 
var surface4
var block
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces  
    surface1=createSprite(100,590,195,50)
    surface1.shapeColor=color(100,5,153)

    surface2=createSprite(300,590,195,50)
    surface2.shapeColor=color(255,0,69)

    surface3=createSprite(500,590,195,50)
    surface3.shapeColor=color(0,5,253)

    surface4=createSprite(700,590,195,50)
    surface4.shapeColor=color(173,0,69)






    //create box sprite and give velocity
    block=createSprite(random(50,750))
    block.shapeColour=rgb(255,0,0)

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite


    //add condition to check if box touching surface and make it box
    if(block.isTouching(surface1)){
    block.shapeColor=color(100,5,153)
    block.velocityX = 0
    music.stop()
    }

    if(block.isTouching(surface1)){
        block.shapeColor=color(255,0,69)
        block.velocityX = 0
        music.stop()
        }

    if(block.isTouching(surface1)){
        block.shapeColor=color(0,5,253)
        block.velocityX = 0
        music.stop()
            }
        
    if(block.isTouching(surface1)){
        block.shapeColor=color(173,0,69)
        block.velocityX = 0
        music.stop()
                }

    drawSprites()
}
