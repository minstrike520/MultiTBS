import addButton from "../tools/addButton.js";

let $ = io.connect("http://localhost:80/");

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("custom-button")
    }

    preload() {
        $.emit("preload", "preload complete");

        $.on("_connected", function(e){
            console.log(e)
        })
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

        let SendInput = new CustomEvent("send-input")

        let inp = document.createElement("input");

        inp.className="1";

        inp.onfocus = function () {

            inp.keydown = this.addEventListener("keydown", function(e) {
                
                if (e.key === "Enter") {
                    console.log("Input enter", e.key)
                }                
            })
        }
        inp.onblur = function () {

            console.log("blurred")

            this.removeEventListener("keydown", this.keydown);
        }
        

        let serverUrlInput = game.add.dom(
            0,0,
            DOMContainer.appendChild(
                inp
            ),
            `   background-color: yellow;
                width: 100px;
                height: 100px;
                placeholder: Input server url
            `,
        )
        .addListener('input')
        .on("input", function (e) {
            console.log(e.target.value);
        })
        .setOrigin(0)
        







    }

    update() {
        
    }
    

}
