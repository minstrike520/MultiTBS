import DOMContainer from "./domContainerLocation.js";

export default function (scene, domType, x, y, style, text, listen, callback) 
{
    let dom = document.createElement(domType);
    
    let e = scene.add.dom(x,y,DOMContainer.appendChild(dom),style, text
    )
    .setOrigin(0);

    e.dom = dom;

    if (!listen) return e;
    
    e.addListener(listen);

    e.on(listen, callback);

    return e
}