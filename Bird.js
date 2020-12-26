class Bird
{
    constructor(x,y)
    {
         var options={
        'friction':1.0,
        'density':1.5,
        'restitution':0.5
         }
        //JSON format Javascript object notation 
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(myworld,this.body);
    }
    display()
    {
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        pos.y = mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,0,0)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
    
}