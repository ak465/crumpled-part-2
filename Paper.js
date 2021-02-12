class Paper{
    constructor(){
       var options ={
           
           restitution: 0,
           friction: 0,
           dinsity: 1.2


       }
       this.body = Bodies.circle(250,520,20,options);
       this.width = 33;
       this.image = loadImage("images/paper.png");
       World.add(world,this.body);
   };
   display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       fill("white");
       rotate(angle);
       imageMode(CENTER);
       images(this.image,pos.x,pos.y,33,33);
   }
   
   }
   