import { tileSize } from "../../configs.js";

export class Player {
    constructor (location, id, container) {
        this.location = location;
        this.id = id;
        this.container = container;
    }
    renderInPhaser (game) {
        game.add.rectangle(
            this.location[0],
            this.location[1],
            tileSize,tileSize, 0x00ff00
        ).setOrigin(0);
        return this
    }
}


export default class {
    constructor (players) {
        this.list = players;
    }
}