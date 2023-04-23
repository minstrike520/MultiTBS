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
        this.cameras.main.setZoom(2);

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
        this.cameras.main.setScroll(this.cameras.main.displayWidth/2-400,this.cameras.main.displayHeight/2-300);

        //this.cameras.main.setScroll(this.displayWidth/2-400,this.displayHeight/2-300)

        this.txt = this.add.text(this.cameras.main.displayWidth,this.cameras.main.displayHeight, "Loading...", {font: "25px Arial", fill: "yellow"}).setScale(0.8).setOrigin(1,1);

        this.rect1 = this.add.rectangle(0,0,30,30, "blue").setOrigin(0);

        this.rect2 = this.add.rectangle(this.cameras.main.displayWidth,this.cameras.main.displayHeight,30,30, "blue").setOrigin(1);

        //console.log(this.cameras.main.getTopLeft()[0],this.cameras.main.getTopLeft()[1])
        this.cameras.main.setOrigin(0);

        this.cameras.main.setScroll(0,0);

        this.inGameUI = this.add.container(0,0, [

            this.txt, this.rect2 ,this.rect1
        ])
        .setScrollFactor(0);
        
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) =>
        {
            if(this.cameras.main.zoom>=minimalZoom || deltaY<0)
            {
                let original = this.cameras.main.zoom;
                
                let zoom = this.cameras.main.zoom - deltaY * zoomFactor;

                let multiplier = zoom/original;

                this.cameras.main.setZoom(zoom);
                /*
                for (let i of this.inGameUI.list) 
                {
                    i.setScale(i.scale/multiplier);
                }*/

                //縮放位置在左上角，但是座標位置卻是在中間。

                this.inGameUI.setScale(this.inGameUI.scale/multiplier)

                const fact = 0.03;

                console.log(this.inGameUI.getBounds().x)

                //this.inGameUI.x -= deltaY*4*fact;

                //this.inGameUI.y -= deltaY*3*fact;

                //console.log("in wheel event: rect1.x = ",this.inGameUI.list[1].x)

                //console.log("", this.inGameUI.x, this.inGameUI.y)
            }
        });
    }
    update ()
    {
        let cameraMain = this.cameras.main;

        let topLeft = cameraMain.getTopLeft();

        let bottomRight = cameraMain.getBottomRight();

        //this.inGameUI.setPosition(topLeft[0],topLeft[1]);

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

        this.txt.setText(
        [
            `TopLeft: ${Math.floor(topLeft[0])}, ${Math.floor(topLeft[1])}`,
            
            `BottomRight: ${Math.floor(bottomRight[0])}, ${Math.floor(bottomRight[1])}`, 
        ])
        //console.log(this.inGameUI.list[0].x, this.inGameUI.x)
    }
}
[
    "scrollX",
    "displayWidth",
    "zoom"

]