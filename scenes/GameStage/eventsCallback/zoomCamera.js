import {minimalZoom, zoomFactor} from "../configs.js";

export default function (game,deltaY, nonScalable) 
{
    if (!(game.cameras.main.zoom>=minimalZoom || deltaY<0)) return;

    let original = game.cameras.main.zoom;

    let zoom = game.cameras.main.zoom - deltaY * zoomFactor;
    
    let multiplier = zoom/original;
    
    game.cameras.main.setZoom(zoom);

    for (let gameObject of nonScalable)
        
        gameObject.setScale(gameObject.scale/multiplier)

    console.log(game.inGameUI.getBounds().x)
    
}