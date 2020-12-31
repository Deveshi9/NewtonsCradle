class Rope{
        
        constructor(bodyA,bodyB,offsetX){
    
            var options={
             bodyA:bodyA,
             bodyB:bodyB,
             pointB:{x:offsetX, y:0}
         }
         
         this.offsetX=offsetX
         this.offsetY=0
         
             this.rope=Constraint.create(options)
             
             World.add(world,this.rope)
             
       
       
        }

    display(){
        
        stroke("yellow")
        strokeWeight(3);
        var posA=this.rope.bodyA.position
        var posB=this.rope.bodyB.position
        line(posA.x,posA.y,posB.x+this.offsetX,posB.y);

    }
}
