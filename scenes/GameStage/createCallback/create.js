import tileMap from "../content/map/tileMap.js";

import wheelEventCallback from "../eventsCallback/wheelEventCallback.js";

import ui from "../content/ui/ui.js";

import {Player} from "../content/player/PlayerContainer.js";

export default function (game) 
{
    tileMap.renderInPhaser(game);
    
    game.cameras.main.setZoom(2).setOrigin(0);

    game.inGameUI = ui(game);
    
    game.cursors = game.input.keyboard.createCursorKeys();

    function playerAdd () {

        let p1 = new Player([0,0],"p1",undefined);
        
        console.log(p1)

        p1.renderInPhaser(game);

        

    }playerAdd();


    
    game.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => wheelEventCallback(game,deltaY)
    );
}