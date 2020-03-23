import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
  title: "Battle Lite",
  width: 800,
  height: 600,
  parent: 'game-id',
  backgroundColor: '#18216D'
}

export class BattleLite extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

window.onload = () => {
  var game = new BattleLite(config);
}

