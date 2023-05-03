import tileMap from "./content/map/tileMap.js";

import zoomCamera from "./callbacks/zoomCamera.js";

import addUi from "./content/ui/ui.js";

import addDebugPanel from "./content/spriteAddPanel.js";

import SpriteContainer from "./content/sprite/SpriteContainer.js";

export default function (scene) 
{
    tileMap.renderInPhaser(scene);
    
    scene.cameras.main.setZoom(2).setOrigin(0);

    scene.inGameUI = addUi(scene);

    scene.cursors = scene.input.keyboard.createCursorKeys();

    scene.sprites = new SpriteContainer(scene);
    
    scene.panel = addDebugPanel(scene, scene.sprites);

    

    scene.nonScalable = [scene.inGameUI, scene.panel]

    scene.input.on('wheel', 
    (pointer, gameObjects, deltaX, deltaY, deltaZ) => zoomCamera(scene,deltaY,scene.nonScalable)
    );
}