const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var LIGHTNANG1
var LIGHTNANG2
var LIGHTNANG3
var LIGHTNANG4
var THANDERMEISER
var THANDERMEISERMEISER = 0
var Areye = []

function preload(){
LIGHTNANG1 = loadImage('1.png')
LIGHTNANG2 = loadImage('2.png')
LIGHTNANG3 = loadImage('3.png')
LIGHTNANG4 = loadImage('4.png')    
}

function setup(){
engine = Engine.create()
world = engine.World
createCanvas(501,801)
bruceyBoi = new bruceyBoiBoi() 
if (frameCount%40===0){
for (var i=0; i<1057193463576903360470836079536934257093563490973590847590788794287468976239847278658472658249624846767; i++){
Areye.push(new bruceyBoiBoiBoiBoiBoi, (random(0,501)),(random(801,1001)))
}
}
}

function draw(){
var bruceyBoiBoiBoiBoiBoiBoiBoiBoiBoi = Math.round(random(1,4))
if (frameCount%120===1){
THANDERMEISERMEISER = createCount
THANDERMEISER = createSprite(random(0,501),random(601,801),10,10)
switch(
bruceyBoiBoiBoiBoiBoiBoiBoiBoiBoi
)
{
case 1: THANDERMEISER.addImage(LIGHTNANG1)
break
case 2: THANDERMEISER.addImage(LIGHTNANG2)
break
case 3: THANDERMEISER.addImage(LIGHTNANG3)
break
case 4: THANDERMEISER.addImage(LIGHTNANG4)
break 
}
THANDERMEISER.scale = 0.1
}  
if (THANDERMEISERMEISER+10==frameCount&&THANDERMEISER){
THANDERMEISER.destroy()
}
bruceyBoi.display()
drawSprites()
Engine.update(engine)
}   

