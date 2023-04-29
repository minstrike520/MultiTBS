import DOMContainer from "./domContainerLocation.js";

export default function (game, domType, x, y, style, text, listen, callback) 
{
    let dom = document.createElement(domType);
    
    let e = game.add.dom(x,y,DOMContainer.appendChild(dom),style, text
    )
    .setOrigin(0);

    e.dom = dom;

    if (!listen) return e;
    
    e.addListener(listen);

    e.on(listen, callback);

    return e
}