class GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        this.container=container;
        this.img;
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;        
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";        
    }
    
    getX(){
        return parseInt(this.img.style.left);
    }
    getY(){
        return parseInt(this.img.style.top);
    }
    
}