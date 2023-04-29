import tileMap from "./content/map/tileMap.js";

import wheelEventCallback from "./eventsCallback/wheelEventCallback.js";

import ui from "./content/ui/ui.js";

import addPlayer from "./content/player/addPlayer.js";

export default function (game) 
{
    tileMap.renderInPhaser(game);
    
    game.cameras.main.setZoom(2).setOrigin(0);

    game.inGameUI = ui(game);
    
    game.cursors = game.input.keyboard.createCursorKeys();

    addPlayer(game);


    
    game.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => wheelEventCallback(game,deltaY)
    );
}