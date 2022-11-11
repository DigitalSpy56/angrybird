class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trayectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x >200 && this.body.velocity.x>5 && slingshot.sling.bodyA === null){
      var position = [this.body.position.x,this.body.position.y]
      this.trayectory.push(position)
      
    }
    for(var i= 0;  i<this.trayectory.length; i++){
      ellipse(this.trayectory[i][0],this.trayectory[i][1],10,10)
    }
    
  }
}
