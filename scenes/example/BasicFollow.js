var player;
var cursors;

class BasicFollow extends Phaser.Scene {
    constructor () {
        super("playthis");
    }
    preload() {
        this.load.image('background','assets/YamaBackground.png');
        this.load.image('player','assets/sprites/GreenSmile.png');
    }
    create() {
        console.log(this);
        this.add.tileSprite(0, 0, 1920, 1920, 'background');
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.world.setBounds(0, 0, 1920, 1920);
        player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        this.physics.p2.enable(player);
        cursors = this.input.keyboard.createCursorKeys();
        this.camera.follow(player);
    }
    update() {

    }
    render() {

    }
}