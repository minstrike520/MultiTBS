import addButton from "../tools/addButton.js";

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("custom-button")
    }

    preload() {
        
    }

    create() 
    {
        let DOMContainer = document.getElementById("DOMContainer"); // the phaser's built-in container just don't f..ing work :(

        let game = this;

        let buttonToGame = addButton(DOMContainer,this, 400, 300, `
            background-color: lime; 
            width: 220px; 
            height: 110px; 
            font-size: 72px`, 
            'start!', 
            function () 
        {
            game.scene.start("gameStage");
        });
        let buttonToLab = addButton(DOMContainer,this, 400, 500, `
            background-color: lime; 
            width: 220px; 
            height: 110px; 
            font-size: 58px`, 
            'Go to lab',
            function()
        {
            game.scene.start("lab");
        })
        







    }

    update() {
        
    }
    

}
