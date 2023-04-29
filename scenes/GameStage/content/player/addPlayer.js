import {Player} from "../player/PlayerContainer.js";

export default function (game, x, y, name) 
{
    let p1 = new Player([x,y],name,undefined);

    p1.renderInPhaser(game);
}