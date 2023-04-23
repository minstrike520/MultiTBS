import {tileSize} from "./configs.js";

export default 
{
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
    },
    load (game) 
    {
        let posY = 0;

        game.tileMap = [];

        for (let row of this.content) 
        {
            game.tileMap[posY] = [];

            let posX = 0;

            for (let tileIndex of row) 
            {
                console.log(this.fileName[tileIndex]);

                let tile = game.add.image(posX*tileSize,posY*tileSize,this.fileName[tileIndex]);

                tile.setOrigin(0)

                tile.setScale(50/tile.displayWidth);
                
                game.tileMap[posY][posX] = tile;

                posX += 1;
            }
            posY += 1;
        }
        game.map = 
        {
            displayWidth: this.getMapSize()[0] * tileSize,
            
            displayHeight: this.getMapSize()[1] * tileSize
        }
    },
    preload (game) 
    {
        for (let c = 0; c<this.fileUrl.length;c++) 

            game.load.image(this.fileName[c],this.fileUrl[c]);
        
    }

};