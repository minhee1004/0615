class Ball extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY,) {
        super(container, src, width, height, x, y, velX, velY);

        this.falled = false;

        //container,width,height,x,y,bg
        this.leftSensor = new LeftSensor(this.container, 1, 30, this.x, this.y, "");
        this.rightSensor = new RightSensor(this.container, 1, 30, this.x + this.width, this.y, "");
        this.topSensor = new TopSensor(this.container, 30, 1, this.x, this.y, "");
        this.bottomSensor = new BottomSensor(this.container, 30, 1, this.x, this.y + this.height, "");
    }

    hitRemoveBrick() {
        for (let i = 0; i < brickArray.length; i++) {
            let result = collisionCheck(this, brickArray[i]);
            if (result) { //충돌하면
                this.container.removeChild(brickArray[i].img); //벽돌이미지제거

                //충돌난 벽이 몇번째 들어있는지 조사
                let index = brickArray.indexOf(brickArray[i]);
                //배열에서 제거
                brickArray.splice(index, 1);

            //this.container.removeChild(brick.leftSensor.div);
            //this.container.removeChild(brick.rightSensor.div);
            //this.container.removeChild(brick.topSensor.div);
            //this.container.removeChild(brick.bottomSensor.div);
                
            }
        }
    }

    hitCheckBar() {
        let result = collisionCheck(this, bar);
        if (result) {
            //충돌이 일어나면, 공의 velY를 -1* 부호로 바꾼다
            this.velY = -this.velY;
        }

    }
    hitCheckBrick() {
        for (let i = 0; i < brickArray.length; i++) {
            let result = collisionCheck(this, brickArray[i]);
            if (result) {
                this.velY = -this.velY;
            }
        }
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x >= 500 - 30 || this.x <= 0) {
            this.velX = -this.velX;
        }
        if (this.y >= 800 - 30 || this.y <= 0) {
            this.velY = -this.velY;
        }

        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();

        this.topSensor.tick(this);
        this.topSensor.render();

        this.bottomSensor.tick(this);
        this.bottomSensor.render();


    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;

        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();

        this.topSensor.tick(this);
        this.topSensor.render();

        this.bottomSensor.tick(this);
        this.bottomSensor.render();

    }

    //오버라이딩
    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        //console.log
        this.hitCheckBar();
        this.hitCheckBrick();
        this.hitRemoveBrick() ;
       
        if (this.y > 750) {
            //화면에서 제거 
            this.container.removeChild(this.img);

            //배열 몇번째 공이 들어있는지 조사
            let index = ballArray.indexOf(this);
            //배열에서 제거
            ballArray.splice(index, 1);

            //센서 4개 삭제
            this.container.removeChild(this.leftSensor.div);
            this.container.removeChild(this.rightSensor.div);
            this.container.removeChild(this.topSensor.div);
            this.container.removeChild(this.bottomSensor.div);
        }
    }
     
}