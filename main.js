var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000050,
    physics: {
        default: 'arcade',
    },
    dom: {
        createContainer: true
    },
    scene: [
        ButtonTest, GameStage
    ]
  };

import { GameStage } from "./scenes/GameStage/GameStage.js";

document.var;
document.game = new Phaser.Game(config);