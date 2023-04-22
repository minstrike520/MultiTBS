const minimalZoom = 1.3;
const zoomFactor = 0.001;
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
        super("gameStage");
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

        let posY = 0;

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

        this.inGameUI = {
            objects: 
            {
                txt: this.add.text(400,300, "Loading...", {font: "25px Arial", fill: "yellow"}).setScrollFactor(0)
            },
            scale: 1,
            setScale(scale) 
            {
                this.scale = scale;
                for (const [key, value] of Object.entries(this.objects)) 
                {
                    value.setScale(scale)
                }
            }
        }

        this.testDOM = this.add.dom(400,300,'div',
        'background-color: lime; width: 220px; height: 100px; font: 48px Arial'
        , 'text').setScrollFactor(1);

        console.log(this.testDOM)
        
        this.cameras.main.setBounds(0, 0, this.map.displayWidth, this.map.displayHeight, 0);

        this.cameras.main.setOrigin(0.5);

        this.cameras.main.setZoom(4);

        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) =>
        {
            if(this.cameras.main.zoom>=minimalZoom || deltaY<0)
            {
                let original = this.cameras.main.zoom;
                
                let zoom = this.cameras.main.zoom - deltaY * zoomFactor;

                let multiplier = zoom/original;

                this.cameras.main.setZoom(zoom);
                
                this.inGameUI.setScale(this.inGameUI.scale/multiplier);
            }
        });

        console.log(this.map.displayWidth);
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





