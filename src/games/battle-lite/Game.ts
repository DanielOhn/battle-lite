import Phaser from "phaser"

import GameScene from "./scenes/GameScene"

export const config: Phaser.Types.Core.GameConfig = {
  title: "Battle Lite",
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game-root",
  scene: [GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
}

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

export default Game
