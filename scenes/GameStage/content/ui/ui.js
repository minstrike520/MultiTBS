export default function (scene) 
{
    let txt = scene.add.text
    (
        scene.cameras.main.displayWidth,
        
        scene.cameras.main.displayHeight, 
        
        "Loading...", 
        
        {font: "25px Arial", fill: "yellow"} 
    )
    .setScale(0.5)
    
    .setOrigin(1,1);

    let rect1 = scene.add.rectangle(0,0,30,2, "blue").setOrigin(0);

    let rect2 = scene.add.rectangle(scene.cameras.main.displayWidth,scene.cameras.main.displayHeight,30,2, "blue").setOrigin(1);

    let inGameUI = scene.add.container(0,0, [

        txt, rect2 ,rect1
    ])
    .setScrollFactor(0);

    scene.txt = txt;

    return inGameUI
}