export default function (game) 
{
    game.add.image(300,400,'background');

    game.rc1 = game.add.rectangle(0,0,30,30, 0xff0000).setOrigin(0);
}