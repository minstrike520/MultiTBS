export class StartScene extends Phaser.Scene {
    constructor() {
        super("custom-button")
    }

    preload() {
        
    }

    create() 
    {
        let button = document.createElement("div");

        button.className = "startButton";

        document.getElementById("container") // the phaser's built-in container just don't f..ing work :(

        .appendChild(button);
        
        this.testDOM = this.add.dom(400,300,button, 'background-color: lime; width: 220px; height: 110px; font-size: 72px', 'Start!');
        
        console.log(this.testDOM)

        this.testDOM.addListener('click');
        
        let game = this;
        
        function clickCallback() {
            console.log(game.scene)
            game.scene.start("gameStage");
        }
        this.testDOM.on("click", clickCallback)
    }

    update() {
        
    }
    

}
