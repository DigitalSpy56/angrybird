class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visible=255
    this.image = loadImage("sprites/enemy.png");
  }

score(){
  if(this.visible<0&&this.visible>-50000){
score++
  }
}
  display() {
    //console.log(this.body.speed);
    if(this.body.speed < 3) {
      super.display();
    } else {
      World.remove(world, this.body);
     push()
      this.visible=this.visible-5
      
      tint(255,this.visible)
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop()
      this.score();
    }
  }

 };
 
