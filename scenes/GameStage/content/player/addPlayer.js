import {Player} from "../player/PlayerContainer.js";

export default function (game) 
{
    let p1 = new Player([0,0],"p1",undefined);

    p1.renderInPhaser(game);
}