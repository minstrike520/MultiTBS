/*   The base game object is all Phaser.GameObjects.*    */

//https://newdocs.phaser.io/docs/3.60.0/Phaser.GameObjects.GameObjectFactory

/*
    `preload`, `create`, `update` is called 
        Phaser.Types.Scenes.Scene * Callback

*/

/*
from https://www.thepolyglotdeveloper.com/2020/09/switch-between-scenes-phaser-game/
https://phaser.discourse.group/t/adding-onclick-to-dom-element/4414
function clickCallback() {
            console.log(game.scene)
            game.scene.start("gameStage");
        }
        this.testDOM.on("click", clickCallback)
        
*/


/*
this.cameras.main.startFollow(this.viewpoint, true);

this.cameras.main.[
    "scrollX",
    "displayWidth",
    "zoom"
]
this.cameras.main.setBounds(0, 0, this.map.displayWidth, this.map.displayHeight, 0)

this.textrues.addCanvas('grass1', document.getTile("grass1"));

object.setScale(1);

this.add.dom()

*/

/*
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
        
        this.inGameUI.objects.txt.setText(String(Math.floor(this.viewpoint.x) )+","+String(Math.floor(this.viewpoint.y) ))
        //this.inGameUI.objects.txt.setText(String(Math.floor(this.viewpoint.x) )+","+String(Math.floor(this.viewpoint.y) ))
        console.log(this.cameras.main)
    }
*/
/*
            `scroll: ${Math.floor(cameraMain.scrollX)}, ${Math.floor(cameraMain.scrollY)} `,
            `display(half): ${Math.floor(cameraMain.displayWidth/2)}, ${Math.floor(cameraMain.displayHeight/2)} `,

*/
