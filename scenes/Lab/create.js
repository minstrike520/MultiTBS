export default function (scene) 
{
    scene.add.image(300,400,'background');

    scene.rc1 = scene.add.rectangle(0,0,30,30, 0xff0000).setOrigin(0);
}