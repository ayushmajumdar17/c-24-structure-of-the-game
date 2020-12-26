class Log
{
    constructor(x,y,height,angle)
    {
         var options={
        'friction':1.0,
        'density':1.0,
        'restitution':0.8
         }
        //JSON format Javascript object notation 
    this.body=Bodies.rectangle(x,y,20,height,options);
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.body, angle);
    World.add(myworld,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,255,0)
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
    }
    
}