import {cursorScrollFactor} from "./configs.js"
import tileMap from "./tileMap.js";
import create from "./createCallback/create.js";

export class GameStage extends Phaser.Scene {
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
        create(this);
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