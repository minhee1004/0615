class BottomSensor extends Sensor{
    tick(obj){
        this.x=obj.x+2;
        this.y=obj.y+obj.height-this.height;
 
     } 
   
}