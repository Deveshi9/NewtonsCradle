class bob
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'friction':0.3,
            'density':0.4
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        
        World.add(world,this.body);
        
    }

    display()
    {
       
        
        fill("magenta");
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        
    }
}