class Rock {
  constructor(x, y) {
    var options = {
        'restitution':0.15,
        'friction':10,
        'density':200
    }
    this.body = Bodies.circle(x, y, 15, options);
    this.image = loadImage("Image/rock.png")
    this.width = 22;
    this.height = 15;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS)
    fill("#D30E1E");
    ellipse(0, 0, this.width,this.height);
    imageMode(CENTER)
    image(this.image,5, 0,80,80 );
    pop();
  }
};