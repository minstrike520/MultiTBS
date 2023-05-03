import addDom from "../../../domTools/addDomObject.js";

export default function (game, spriteList) 
{
    let panel = {
        xPosInput: addDom(game, "input", 0, 340,`
        background-color: white; 
        width: 50px; 
        height: 30px; 
        font-size: 15px`,
        ""),
        yPosInput: addDom(game, "input", 70, 340,`
        background-color: white; 
        width: 50px; 
        height: 30px; 
        font-size: 15px`,
        ""),
        nameInput: addDom(game, "input", 150, 340,`
        background-color: white; 
        width: 70px; 
        height: 30px; 
        font-size: 15px`,
        ""),
        hintMsg: addDom(game, "div", 110, 300,`

        font-size: 15px`,
        "")
    }
    panel.addSpriteButton = addDom(game, "button", 0, 300,`
    background-color: cyan; 
    width: 100px; 
    height: 30px; 
    font-size: 12px`,
    "(server) add sprite", "click", function() {

        let x = parseInt(panel.xPosInput.dom.value);

        let y = parseInt(panel.yPosInput.dom.value);

        let id = panel.nameInput.dom.value;

        panel.xPosInput.dom.value = "";

        panel.yPosInput.dom.value = "";

        panel.nameInput.dom.value = "";

        if (isNaN(x) || isNaN(y)) 
        {
            panel.hintMsg.dom.innerText = "Please enter valid number";

            return
        }
        let spriteIndex = spriteList.ids.indexOf(id);

        if (spriteIndex+1) 
        {
            spriteList.list[spriteIndex].updateLocation(x,y);

            return
        }
        panel.hintMsg.dom.innerText = ""

        spriteList.append(x, y, id)
    })
    return game.add.container(0,0,Object.values(panel))
        
        .setScrollFactor(0);
}