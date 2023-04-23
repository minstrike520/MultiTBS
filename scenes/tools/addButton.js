export default function (node, game, x, y, style, text, callback) 
{
    console.log(callback)

    let button = document.createElement("div");

    button.className = "startButton";

    node.appendChild(button);

    let dom = game.add.dom(x,y,button, style, text)

    .addListener('click')    
    
    .on("click", callback);

    return dom;
}