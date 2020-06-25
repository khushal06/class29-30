class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
       
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1,200,20)
        image(this.s2,170,20)

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(226, 145, 38)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        }
    }
    
}