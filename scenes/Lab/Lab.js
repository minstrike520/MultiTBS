import create from "./create.js";

export default class Lab extends Phaser.Scene {
    constructor() {
        super("lab");
        document.gameLab = this;
    }

    preload() {
        this.load.image('background', "assets/YamaBackground.png")
    }

    create() {
        create(this);
    }

    update() {
        
    }

}
