export default function (game) 
{
    let txt = game.add.text
    (
        game.cameras.main.displayWidth,
        
        game.cameras.main.displayHeight, 
        
        "Loading...", 
        
        {font: "25px Arial", fill: "yellow"} 
    )
    .setScale(0.8)
    
    .setOrigin(1,1);

    let rect1 = game.add.rectangle(0,0,30,2, "blue").setOrigin(0);

    let rect2 = game.add.rectangle(game.cameras.main.displayWidth,game.cameras.main.displayHeight,30,2, "blue").setOrigin(1);

    let inGameUI = game.add.container(0,0, [

        txt, rect2 ,rect1
    ])
    .setScrollFactor(0);

    game.txt = txt;

    return inGameUI
}