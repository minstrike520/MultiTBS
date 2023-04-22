let tileMap = {
    content: [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    fileUrl: [
        "assets/tiles/tile1.png"
    ],
    fileName: [
        "tile1"
    ],
    getUrl (name) {
        let index = this.fileName.indexOf(name);
        if (!index) throw new Error(`the name ${name} is not in the file list!`);
        return this.fileUrl[index];
    }
}
class GameStage extends Phaser.Scene { //mine
    constructor () {
        super();
    }
    preload() {
        this.load.image("tile1", "assets/sprites/GreenSmile.png");

        this.load.image("bg", 'assets/YamaBackground.png')

        for (let c = 0; c<tileMap.fileUrl;c++) 
            this.load.image(tileMap.fileName[c],tileMap.fileUrl[c]);
        
    }
    create() {
        this.cameras.main.setBounds(0, 0, 1024, 1024);

        //this.add.image(400,300,"tile1").setOrigin(0)

        this.add.image(0, 0, "dfg").setOrigin(0).setScrollFactor(1);

        this.cursors = this.input.keyboard.createCursorKeys();

        //this.viewpoint = this.physics.add.rectangle(512,512,1,1);

        this.viewpoint = this.physics.add.image("tile1");

        this.cameras.main.startFollow(this.viewpoint, true);

        this.cameras.main.setZoom(0.7);

        /*
        this.cameras.main.setBounds(0, 0, 1024, 1024);

        this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.txt = this.add.text(400,300, "Loading...", {font: "25px Arial", fill: "yellow"}).setScrollFactor(0);

        this.ship = this.physics.add.image(400, 300, 'ship');

        this.ship.setScale(0.1);

        this.cameras.main.startFollow(this.ship, true);
        // this.cameras.main.startFollow(this.ship, true, 0.09, 0.09);

        this.cameras.main.setZoom(1);

        console.log(this.cameras);
        */
    }
    update() {

        
        this.viewpoint.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.viewpoint.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.viewpoint.setAngle(90).setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.viewpoint.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.viewpoint.setAngle(-180).setVelocityY(200);
        }

        //this.txt.setText(String(Math.floor(this.viewpoint.x) )+","+String(Math.floor(this.viewpoint.y) ))
    }
    render() {

    }
}





