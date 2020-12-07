
  class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':1.0,
            'friction':0.5,
            'density':1.2
    };
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    
    World.add(world,this.body)
    
    }
    
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
    push();
        ellipseMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
       ellipse(0,0,50,50);
       fill("white");
    pop();
    }




    }