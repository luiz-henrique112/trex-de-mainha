var trex, trexImg
var score = 0
var pedra1, pedra2, pedra3, pedra4
var pedraImg
var ground
var gameState = 1
var parede1, parede2
var restart, restartImg
var control = 0
   


function preload(){

    
    trexImg = loadImage("./trex1.png")
    pedraImg = loadImage("./pedra.png")
    pedra1 = loadImage("./pedra.png")
    pedra2 = loadImage("./pedra.png")
    pedra3 = loadImage("./pedra.png")
    pedra4 = loadImage("./pedra.png")
    restartImg = loadImage("./restart.png")
}

function setup(){
    createCanvas(600,windowHeight)

pedra1 = createSprite(200, windowHeight - windowHeight)
pedra1.x =  Math.round(random(10,590))
pedra1.addImage(pedraImg)
pedra1.scale = 0.3
pedra1.velocityY = 4

pedra2 = createSprite(200, windowHeight - windowHeight)
pedra2.x =  Math.round(random(10,590))
pedra2.addImage(pedraImg)
pedra2.scale = 0.3
pedra2.velocityY = 4

pedra3 = createSprite(200, windowHeight - windowHeight)
pedra3.x =  Math.round(random(10,590))
pedra3.addImage(pedraImg)
pedra3.scale = 0.3
pedra3.velocityY = 4

pedra4 = createSprite(200, windowHeight - windowHeight)
pedra4.x =  Math.round(random(10,590))
pedra4.addImage(pedraImg)
pedra4.scale = 0.3
pedra4.velocityY = 4

trex = createSprite(200,windowHeight - 85)
trex.addImage(trexImg)
trex.scale = 0.8
trex.x = Math.round(random(10,590))

ground =  createSprite(300, windowHeight - 50, 600,2)

parede1 = createSprite(1, ground.y - 500, 1, 1000)
parede2 = createSprite(600, ground.y - 500, 1, 1000)

restart = createSprite(300, windowHeight / 2)
restart.addImage(restartImg)
restart.visible = false

}


function draw(){
background("#ffffff")


if(score >=  20 || score > 20){ 

   if(control == 0){
    rebatente()
    control = 1
    }
pedra1.bounceOff(parede1)
pedra1.bounceOff(parede2)
pedra2.bounceOff(parede1)
pedra2.bounceOff(parede2)
pedra3.bounceOff(parede1)
pedra3.bounceOff(parede2)
pedra4.bounceOff(parede1)
pedra4.bounceOff(parede2)

if (pedra1.isTouching(parede1)) {
    pedra1.velocityX = -3
}
if (pedra1.isTouching(parede2)) {
    pedra1.velocityX = 3
}


if (pedra2.isTouching(parede1)) {
    pedra2.velocityX = -3
}
if (pedra2.isTouching(parede2)) {
    pedra2.velocityX = 3
}

if (pedra3.isTouching(parede1)) {
    pedra3.velocityX = -3
}
if (pedra3.isTouching(parede2)) {
    pedra3.velocityX = 3
}

if (pedra4.isTouching(parede1)) {
    pedra4.velocityX = -3
}
if (pedra4.isTouching(parede2)) {
    pedra4.velocityX = 3
}
}

if (keyDown(RIGHT_ARROW)) {

    trex.x = trex.x + 5
    
}

if (keyDown(LEFT_ARROW)) {

trex.x = trex.x - 5

}

if (pedra1.isTouching(ground)) {
    
pedra1.y = windowHeight - windowHeight
pedra1.x = Math.round(random(10,590))
score = score + 1

}

if (pedra2.isTouching(ground)) {
    
    pedra2.y = windowHeight - windowHeight
    pedra2.x = Math.round(random(10,590))
    score = score + 1
    }

    if (pedra3.isTouching(ground)) {
    
        pedra3.y = windowHeight - windowHeight
        pedra3.x = Math.round(random(10,590))
        score = score + 1
        }

        if (pedra4.isTouching(ground)) {
    
            pedra4.y = windowHeight - windowHeight
            pedra4.x = Math.round(random(10,590))
            score = score + 1
            }

     
if (pedra4.isTouching(trex)) {

    colide()
    
}
     
if (pedra1.isTouching(trex)) {

    colide()
    
}

if (pedra3.isTouching(trex)) {

    colide()
    
}

if (pedra2.isTouching(trex)) {

    colide()
    
}


//trex.debug = true
//parede1.debug = true
pedra1.debug = true
pedra2.debug = true
pedra3.debug = true
pedra4.debug = true

drawSprites()
}


function colide(){

pedra4.velocityY = 0
    pedra1.velocityY = 0 
    pedra2.velocityY = 0
    pedra3.velocityY = 0

pedra4.velocityX = 0
    pedra1.velocityX = 0 
    pedra2.velocityX = 0
    pedra3.velocityX = 0

    restart.visible = true

    if (mousePressedOver(restart)){

reset()

    }

    


}

function reset(){

restart.visible = false



pedra2.y = windowHeight - windowHeight
    pedra2.x = Math.round(random(10,590))
    pedra2.velocityY = 4

    pedra1.y = windowHeight - windowHeight
    pedra1.x = Math.round(random(10,590))
    pedra1.velocityY = 4

    pedra3.y = windowHeight - windowHeight
    pedra3.x = Math.round(random(10,590))
    pedra3.velocityY = 4

    pedra4.y = windowHeight - windowHeight
    pedra4.x = Math.round(random(10,590))
    pedra4.velocityY = 4

    score = 0

}

function rebatente () {

    pedra1.velocityX = 3
    pedra2.velocityX = 3
    pedra3.velocityX = -3
    pedra4.velocityX = -3

    
}


