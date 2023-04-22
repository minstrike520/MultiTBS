const minimalScroll = 1.3;
const cursorScrollFactor = 5;
const tileSize = 50;

let tileMap = {
    content: [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    fileUrl: [
        "assets/tiles/tile1.png",
        "assets/sprites/GreenSmile.png" //just for test
    ],
    fileName: [
        "tile1",
        "greeny"
    ],
    getUrl (name) {
        let index = this.fileName.indexOf(name);
        if (!index) throw new Error(`the name ${name} is not in the file list!`);
        return this.fileUrl[index];
    },
    getMapSize() {
        return [this.content[0].length, this.content.length]
    }

}


class GameStage extends Phaser.Scene { //example
    constructor ()
    {
        super();
    }
    preload ()
    {
        //console.log(document.getTile("grass1"));
        this.load.image('sprite1', 'assets/sprites/GreenSmile.png');

        //this.load.image('map', 'assets/YamaBackground.png');
        
        for (let c = 0; c<tileMap.fileUrl.length;c++) 
        {
            console.log("asdf",tileMap.fileName[c]);

            this.load.image(tileMap.fileName[c],tileMap.fileUrl[c]);
        }
    }
    create ()
    {
        //this.map = this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);

        this.txt = this.add.text(400,300, "Loading...", {font: "25px Arial", fill: "yellow"}).setScrollFactor(0);

        let posY = 0;

        this.add.image(0,0,)

        this.tileMap = [];

        for (let row of tileMap.content) 
        {
            this.tileMap[posY] = [];

            let posX = 0;

            for (let tileIndex of row) 
            {
                console.log(tileMap.fileName[tileIndex]);

                let tile = this.add.image(posX*tileSize,posY*tileSize,tileMap.fileName[tileIndex]);

                tile.setOrigin(0)

                tile.setScale(50/tile.displayWidth);
                
                this.tileMap[posY][posX] = tile;

                posX += 1;
            }
            posY += 1;
        }
        this.map = {
            displayWidth: tileMap.getMapSize()[0] * tileSize,
            displayHeight: tileMap.getMapSize()[1] * tileSize
        }

        this.cameras.main.setBounds(0, 0, this.map.displayWidth, this.map.displayHeight, 0);

        this.cameras.main.setOrigin(0.5);

        this.cameras.main.setZoom(4);

        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) =>
        {
            if(this.cameras.main.zoom>=minimalScroll)
            {
                this.cameras.main.setZoom(this.cameras.main.zoom - deltaY * 0.001);
            }
            else if(deltaY<0) 
            {
                this.cameras.main.setZoom(this.cameras.main.zoom - deltaY * 0.001);
            } 
        });
        console.log(this.map.displayWidth);
    }
    update_old ()
    {
        this.viewpoint.setVelocity(0);

        if (this.cursors.left.isDown && this.viewpoint.x > 0)
        {
            this.viewpoint.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown && this.viewpoint.x < this.map.displayWidth)
        {
            this.viewpoint.setAngle(90).setVelocityX(200);
        }

        if (this.cursors.up.isDown && this.viewpoint.y > 0)
        {
            this.viewpoint.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown && this.viewpoint.y < this.map.displayHeight)
        {
            this.viewpoint.setAngle(-180).setVelocityY(200);
        }


        
        this.txt.setText(String(Math.floor(this.viewpoint.x) )+","+String(Math.floor(this.viewpoint.y) ))
        //this.txt.setText(String(Math.floor(this.viewpoint.x) )+","+String(Math.floor(this.viewpoint.y) ))
        console.log(this.cameras.main)
    }
    update ()
    {
        let cameraMain = this.cameras.main;
        
        cameraMain.bottomRightX = cameraMain.scrollX;

        if (this.cursors.left.isDown )
        {
            cameraMain.scrollX -= cursorScrollFactor;
        }
        else if (this.cursors.right.isDown)
        {
            cameraMain.scrollX += cursorScrollFactor;
        }

        if (this.cursors.up.isDown)
        {
            cameraMain.scrollY -= cursorScrollFactor;
        }
        else if (this.cursors.down.isDown)
        {
            cameraMain.scrollY += cursorScrollFactor;
        }
        //console.log(cameraMain.scrollX+this.map.displayWidth/2+cameraMain.displayWidth/2)
    }
}
[
    "scrollX",
    "displayWidth",
    "zoom"

]





