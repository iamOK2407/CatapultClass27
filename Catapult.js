class Catapult {
     constructor (BodyA,BodyB){
    var puff={
        bodyA:BodyA,
        bodyB:BodyB,
        stiffness:0.2,
        length:14
    }
    this.kirti=Constraint.create(puff)
    World.add(world,this.kirti)
     }
    display(){
        line(this.kirti.bodyA.position.x,this.kirti.bodyA.position.y,this.kirti.bodyB.position.x,this.kirti.bodyB.position.y)
    }

}