class Bar extends GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        super(container, src, width, height,x,y,velX,velY);
        

        //container,width,height,x,y,bg
        this.barSensor=new TopSensor(this.container,40,1,this.x+5,this.y,"");
    }      
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        this.barSensor.tick(this);
        this.barSensor.render();
 
    }

       
}
