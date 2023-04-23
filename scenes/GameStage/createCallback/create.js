import tileMap from "../tileMap.js";

import wheelEventCallback from "../eventsCallback/wheelEventCallback.js";

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

    game.txt = game.add.text(game.cameras.main.displayWidth,game.cameras.main.displayHeight, "Loading...", {font: "25px Arial", fill: "yellow"}).setScale(0.8).setOrigin(1,1);

    game.rect1 = game.add.rectangle(0,0,30,30, "blue").setOrigin(0);

    game.rect2 = game.add.rectangle(game.cameras.main.displayWidth,game.cameras.main.displayHeight,30,30, "blue").setOrigin(1);

    game.cameras.main.setOrigin(0);

    game.cameras.main.setScroll(0,0);

    game.inGameUI = game.add.container(0,0, [

        game.txt, game.rect2 ,game.rect1
    ])
    .setScrollFactor(0);
    
    game.cursors = game.input.keyboard.createCursorKeys();
    
    game.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => wheelEventCallback(game,deltaY)
    );
}