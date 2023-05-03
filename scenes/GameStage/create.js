import tileMap from "./content/map/tileMap.js";

import zoomCamera from "./eventsCallback/zoomCamera.js";

import addUi from "./content/ui/ui.js";

import addDebugPanel from "./content/spriteAddPanel.js";

import SpriteContainer from "./content/sprite/SpriteContainer.js";

export default function (game) 
{
    tileMap.renderInPhaser(game);
    
    game.cameras.main.setZoom(2).setOrigin(0);

    game.inGameUI = addUi(game);

    game.cursors = game.input.keyboard.createCursorKeys();

    game.sprites = new SpriteContainer(game);
    
    game.panel = addDebugPanel(game, game.sprites);

    

    game.nonScalable = [game.inGameUI, game.panel]

    game.input.on('wheel', 
    (pointer, gameObjects, deltaX, deltaY, deltaZ) => zoomCamera(game,deltaY,game.nonScalable)
    );
}