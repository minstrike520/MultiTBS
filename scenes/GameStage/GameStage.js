import {cursorScrollFactor} from "./configs.js"
import imgCorrs from "./content/map/imgCorrs.js";
import create from "./create.js";

export default class GameStage extends Phaser.Scene {
    constructor ()
    {
        super("gameStage");

        document.gamestage = this;
    }
    preload ()
    {
        this.load.image('sprite1', 'assets/sprites/GreenSmile.png');

        imgCorrs.prototype.preloadAllInPhaser(this);
    }
    create ()
    {
        create(this);
    }
    update ()
    {
        let cameraMain = this.cameras.main;

        let bottomRight = [cameraMain.scrollX+cameraMain.displayWidth,cameraMain.scrollY+cameraMain.displayHeight]

        //this.inGameUI.setPosition(cameraMain.scrollX,cameraMain.scrollY);

        function cursorsBinding (game)
        {
            if (game.cursors.left.isDown )//&& cameraMain.scrollX > 0
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
            `TopLeft: ${Math.floor(cameraMain.scrollX)}, ${Math.floor(cameraMain.scrollY)}`,
            
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