class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.09,
            length : 16
    
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)

        World.add(world,this.chain)
    }

    display(){
        if(this.chain.bodyA!=null){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(0)
        stroke("#301608")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        } 
    }

    fly() { 
       this.chain.bodyA=null 
    }
    attaach(){
        this.chain.bodyA=
    }
    ` `
}