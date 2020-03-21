import { Player } from "../objects/Player"

class GameScene extends Phaser.Scene {
  private player?: Player = undefined
  //   // private background: Phaser.GameObjects.TileSprite;
  //   // private scoreText: Phaser.GameObjects.BitmapText;
  //   // private timer: Phaser.Time.TimerEvent;

  constructor() {
    super({
      key: "Game",
    })
  }

  init(): void {
    this.load.image("cat", "./src/games/battle-lite/assets/cat.jpg")
  }

  create(): void {
    this.add.rectangle(100, 100, 100, 100, 0xff00)

    this.player = new Player({
      scene: this,
      x: Phaser.Math.RND.integerInRange(200, 500),
      y: Phaser.Math.RND.integerInRange(200, 500),
      key: "cat",
    })
  }
}

export default GameScene
