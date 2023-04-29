import { tileSize } from "../../configs.js";

export class Player {
    constructor (location, id, container) {
        this.location = location;
        this.id = id;
        this.container = container;
    }
    renderInPhaser (game) {
        this.gameObject = game.add.rectangle(
            this.location[0]*tileSize,
            this.location[1]*tileSize,
            tileSize,tileSize, 0x00ff00
        ).setOrigin(0);
        return this
    }
    updateLocation(x,y) {
        this.location = [x,y];
        this.gameObject.x = x*tileSize;
        this.gameObject.y = y*tileSize;
    }
}


export default class {
    constructor (game) 
    {
        this.game = game;

        this.list = [];
    }
    get ids () 
    {
        if (!this.list) return [];

        return this.list.map(p => p.id)
    }
    append (x, y, id) 
    {
        this.list.push(new Player([x,y], id, this).renderInPhaser(this.game));
    }
}