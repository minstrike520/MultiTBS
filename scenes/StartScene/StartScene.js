import addDom from "../../domTools/addDomObject.js";

let sio = io.connect("http://localhost:80/");

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("custom-button")
    }

    preload() {
        sio.emit("preload", "preload complete");

        sio.on("_connected", function(e){
            console.log(e)
        })
    }

    create() 
    {
        let game = this;

        let buttonToGame = addDom(game, "button", 200, 150, `
            background-color: lime; 
            width: 220px; 
            height: 110px; 
            font-size: 72px`,
            "start!",
            "click", function () {
                game.scene.start("gameStage");
            })
        let buttonToLab = addDom(game, "button", 200, 300, `
            background-color: lime; 
            width: 220px; 
            height: 110px; 
            font-size: 50px`, 
            'Go to lab',
            "cilck",
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
