class bruceyBoiBoi {
constructor(x,y) {
var bruceyBoiBoiBoiBoiBoiBoiBoiBoi={isStatic:true}
this.bruceyBoiBoiBoi = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
this.bruceyBoiBoiBoiBoi = Bodies.circle(x,y,50,bruceyBoiBoiBoiBoiBoiBoiBoiBoi)
World.add(world, this.bruceyBoiBoiBoiBoi)
}
display() {
imageMode(CENTER)
image(this.bruceyBoiBoiBoi, this.bruceyBoiBoiBoiBoi.position.x, this.bruceyBoiBoiBoiBoi.position.y, 200, 200)
}
}