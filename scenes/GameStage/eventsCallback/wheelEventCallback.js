import {minimalZoom, zoomFactor} from "../configs.js";

export default function (game,deltaY) 
{
    if (!(game.cameras.main.zoom>=minimalZoom || deltaY<0)) return;
    
    let original = game.cameras.main.zoom;
    
    let zoom = game.cameras.main.zoom - deltaY * zoomFactor;

    let multiplier = zoom/original;

    game.cameras.main.setZoom(zoom);

    game.inGameUI.setScale(game.inGameUI.scale/multiplier)

    const fact = 0.03;

    console.log(game.inGameUI.getBounds().x)
    
}