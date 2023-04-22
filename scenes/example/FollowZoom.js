function createCanvas () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    return canvas
}


class FollowZoom extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        console.log(document.getTile("grass1"));
        this.load.image('map', 'assets/YamaBackground.png');
        this.load.image('ship', 'assets/sprites/GreenSmile.png');
        //this.textrues.addCanvas('grass1', document.getTile("grass1"));
    }

    create ()
    {
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
    }

    update ()
    {
        this.ship.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.ship.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.ship.setAngle(90).setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.ship.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.ship.setAngle(-180).setVelocityY(200);
        }

        this.txt.setText(String(Math.floor(this.ship.x) )+","+String(Math.floor(this.ship.y) ))

    }
}


