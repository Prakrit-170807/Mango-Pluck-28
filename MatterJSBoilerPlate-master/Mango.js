// class Mango{
//   constructor(x,y,width,height){
//       this.width=width
//       this.height=height
//       var options={
//         'isStatic':true,
//         'restitution':0.4,
//         'friction':100.0,
//         'density':0.9
//       }

//       this.Mango = Bodies.circle(x, y, width, height ,options);
//       this.image = loadImage("Image/Mango.png")
//     World.add(world, this.Mango);
//   }
//   display(){
//       push()
//       rectMode(CENTER);
//       rect(this.Mango.position.x, this.Mango.position.y, this.width, this.height)
//       imageMode(CENTER)
//       image(this.image,this.Mango.position.x, this.Mango.position.y, 50, 50);
//       pop()
//   }
// }

class Mango {
  constructor(x, y) {
    var options = {
      'isStatic':true,
      'restitution':0.1,
      'friction':100.0,
      'density':0.8
    }
    this.Mango = Bodies.circle(x, y, 16, options);
    this.image = loadImage("Image/Mango.png")
    this.width = 10;
    this.height = 16;
    
    World.add(world, this.Mango);
  }
  display(){
    var angle = this.Mango.angle;
    push();
    translate(this.Mango.position.x, this.Mango.position.y);
    rotate(angle+0.6);
    ellipseMode(RADIUS)
    fill("#D30E1E");
    ellipse(0, 0, this.width, this.height);
    imageMode(CENTER)
    image(this.image,0, -8, 60, 60);
    pop();
  }
};
