import { tileSize } from "../../configs.js";

export class Sprite {
    constructor (location, id, container) {
        this.location = location;
        this.id = id;
        this.container = container;
    }
    renderInPhaser (scene) {
        this.gameObject = scene.add.rectangle(
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
    constructor (scene) 
    {
        this.scene = scene;

        this.list = [];
    }
    get ids () 
    {
        if (!this.list) return [];

        return this.list.map(p => p.id)
    }
    append (x, y, id) 
    {
        this.list.push(new Sprite([x,y], id, this).renderInPhaser(this.scene));
    }
}