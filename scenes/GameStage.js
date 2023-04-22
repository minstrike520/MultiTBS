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
        this.map = 
        {
            displayWidth: tileMap.getMapSize()[0] * tileSize,
            
            displayHeight: tileMap.getMapSize()[1] * tileSize
        }

        this.inGameUI = 
        {
            objects: 
            {
                txt: this.add.text(400,300, "Loading...", {font: "25px Arial", fill: "yellow"}).setScale(0.8).setOrigin(0,1)
                ,
                rect1: this.add.rectangle(300,300,30,30, "blue").setDisplayOrigin(2,2)
            },
            scale: 0.3,

            setScale(scale) 
            {
                console.log(this)
                this.scale = scale;
                for (const [key, value] of Object.entries(this.objects)) 
                {
                    value.setScale(scale)
                }
            },
            init()
            {
                console.log("init")
                for (const [key, value] of Object.entries(this.objects))
                {
                    value.setScrollFactor(1);
                }
                this.setScale(this.scale)
                return this
            }
        }.init();
        
        this.cameras.main.setBounds(0, 0, this.map.displayWidth, this.map.displayHeight, 0);

        this.cameras.main.setOrigin(0.5);

        this.cameras.main.setZoom(4);

        this.cameras.main.getTopLeft = function () 
        {
            return [

                this.scrollX-this.displayWidth/2+400,

                this.scrollY-this.displayHeight/2+300
        ]};
        this.cameras.main.getBottomRight = function () 
        {
            return [

                this.scrollX+this.displayWidth/2+400,

                this.scrollY+this.displayHeight/2+300
        ]};
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

        let topLeft = cameraMain.getTopLeft();

        let bottomRight = cameraMain.getBottomRight();

        this.inGameUI.objects.rect1.setPosition(topLeft[0],topLeft[1]);

        this.inGameUI.objects.txt.setPosition(topLeft[0], bottomRight[1]);

        function cursorsBinding (game)
        {
            if (game.cursors.left.isDown )//&& topLeft[0] > 0
            {
                cameraMain.scrollX -= cursorScrollFactor;
            }
            else if (game.cursors.right.isDown)// && bottomRight[0] < game.map.displayWidth
            {
                cameraMain.scrollX += cursorScrollFactor;
            }
            if (game.cursors.up.isDown)
            {
                cameraMain.scrollY -= cursorScrollFactor;
            }
            else if (game.cursors.down.isDown)
            {
                cameraMain.scrollY += cursorScrollFactor;
            }
        }; cursorsBinding(this);

        this.inGameUI.objects.txt.setText(
        [
            `TopLeft: ${Math.floor(topLeft[0])}, ${Math.floor(topLeft[1])}`,
            
            `BottomRight: ${Math.floor(bottomRight[0])}, ${Math.floor(bottomRight[1])}`, 
        ])
        //console.log(cameraMain.scrollX+this.map.displayWidth/2+cameraMain.displayWidth/2)
    }
}
[
    "scrollX",
    "displayWidth",
    "zoom"

]