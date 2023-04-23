import tileMap from "../tileMap.js";
import {tileSize, minimalZoom, zoomFactor} from "../configs.js";

export default function (game) 
{
    tileMap.load(game);
    
    game.cameras.main.setZoom(2);

    game.cameras.main.getTopLeft = function () 
    {
        return [

            this.scrollX-this.displayWidth/2+400,

            this.scrollY-this.displayHeight/2+300
    ]};
    game.cameras.main.getBottomRight = function () 
    {
        return [

            this.scrollX+this.displayWidth/2+400,

            this.scrollY+this.displayHeight/2+300
    ]};
    game.cameras.main.setScroll(game.cameras.main.displayWidth/2-400,game.cameras.main.displayHeight/2-300);

    //game.cameras.main.setScroll(game.displayWidth/2-400,game.displayHeight/2-300)

    game.txt = game.add.text(game.cameras.main.displayWidth,game.cameras.main.displayHeight, "Loading...", {font: "25px Arial", fill: "yellow"}).setScale(0.8).setOrigin(1,1);

    game.rect1 = game.add.rectangle(0,0,30,30, "blue").setOrigin(0);

    game.rect2 = game.add.rectangle(game.cameras.main.displayWidth,game.cameras.main.displayHeight,30,30, "blue").setOrigin(1);

    //console.log(this.cameras.main.getTopLeft()[0],this.cameras.main.getTopLeft()[1])
    game.cameras.main.setOrigin(0);

    game.cameras.main.setScroll(0,0);

    game.inGameUI = game.add.container(0,0, [

        game.txt, game.rect2 ,game.rect1
    ])
    .setScrollFactor(0);
    
    game.cursors = game.input.keyboard.createCursorKeys();
    
    game.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) =>
    {
        if(game.cameras.main.zoom>=minimalZoom || deltaY<0)
        {
            let original = game.cameras.main.zoom;
            
            let zoom = game.cameras.main.zoom - deltaY * zoomFactor;

            let multiplier = zoom/original;

            game.cameras.main.setZoom(zoom);
            /*
            for (let i of game.inGameUI.list) 
            {
                i.setScale(i.scale/multiplier);
            }*/

            //縮放位置在左上角，但是座標位置卻是在中間。

            game.inGameUI.setScale(game.inGameUI.scale/multiplier)

            const fact = 0.03;

            console.log(game.inGameUI.getBounds().x)

            //game.inGameUI.x -= deltaY*4*fact;

            //game.inGameUI.y -= deltaY*3*fact;

            //console.log("in wheel event: rect1.x = ",game.inGameUI.list[1].x)

            //console.log("", game.inGameUI.x, game.inGameUI.y)
        }
    });
}