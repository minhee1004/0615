class BottomSensor extends Sensor{
    tick(obj){
        this.x=obj.x;
        this.y=obj.y+obj.height-this.height;
 
     } 
   
}