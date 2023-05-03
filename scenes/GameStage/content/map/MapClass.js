import imgCorrs from "./imgCorrs.js";

import { tileSize } from "../../configs.js";

export default class extends imgCorrs{
    constructor (content) {
        super();

        this.content = content;
    }
    get mapSize() {
        return [this.content[0].length, this.content.length]
    }
    get GameObject ()
    { 
        return {

        displayWidth: this.getMapSize()[0] * tileSize,
            
        displayHeight: this.getMapSize()[1] * tileSize
        }
    }
    renderInPhaser (scene) {

        let posY = 0;

        scene.tileMap = [];

        for (let row of this.content) 
        {
            scene.tileMap[posY] = [];

            let posX = 0;

            for (let tileIndex of row) 
            {
                let tile = scene.add.image(posX*tileSize,posY*tileSize,this.fileName[tileIndex]);

                tile.setOrigin(0)

                tile.setScale(50/tile.displayWidth);
                
                scene.tileMap[posY][posX] = tile;

                posX += 1;
            }
            posY += 1;
        }
    }
}