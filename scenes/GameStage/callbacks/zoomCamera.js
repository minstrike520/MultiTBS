import {minimalZoom, zoomFactor} from "../configs.js";

export default function (scene,deltaY, nonScalable) 
{
    if (!(scene.cameras.main.zoom>=minimalZoom || deltaY<0)) return;

    let original = scene.cameras.main.zoom;

    let zoom = scene.cameras.main.zoom - deltaY * zoomFactor;
    
    let multiplier = zoom/original;
    
    scene.cameras.main.setZoom(zoom);

    for (let gameObject of nonScalable)
        
        gameObject.setScale(gameObject.scale/multiplier)

    console.log(scene.inGameUI.getBounds().x)
    
}