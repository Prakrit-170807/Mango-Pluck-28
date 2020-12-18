const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var rock, mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var chain,chain2



function preload() {
    backgroundImg = loadImage("Image/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,70);

  
    mango = new Mango(880, 270);
    mango1 = new Mango(790,190);
    mango2 = new Mango(1100,240);
    mango3 = new Mango(920,440);
    // mango4 = new Mango(810, 220);
    // mango5 = new Mango(810,180,300, PI/2);
    // mango6 = new Mango(810,160,70,70);
    // mango7 = new Mango(760,120,150, PI/7); 
    // mango8 = new Mango(870,120,150, -PI/7);
    // mango9 = new Mango(150,150,70,PI/2)
    // mango10 = new Mango(150,150,70,PI/2)

    rock = new Rock(290,300);
    
    chain = new Chain(rock.body,{x:290,y:300})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    
    mango.display()
    mango1.display()
    mango2.display()
    mango3.display()
    // mango4.display()
    // mango5.display()
    // mango6.display()
    // mango7.display()
    // mango8.display()
    // mango9.display()
    // mango10.display()

    chain.display()
    
    rock.display()

    collision(rock(rock),mango)

    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.setPosition(rock.body,{x:290,y:300})
        chain.attach(rock.body)
    }
}
function collision(rock,mango){
    mangoBodyPosition=mango.body.position
    rockBodyPosition=rock.body.position

    var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=mango.r+rock.r){
        Matter.Body.setStatic(mango.body,false)
    }
}