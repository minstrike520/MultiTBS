var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000050,
    physics: {
        default: 'arcade',
    },
    scene: [
        GameStage,
    ]
  };

document.var;
document.game = new Phaser.Game(config);