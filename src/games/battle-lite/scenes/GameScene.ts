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

    console.log()
  }

  preload(): void {
    this.load.image("cat", "https://placekitten.com/50/50")
    this.load.image("test", "src/games/battle-lite/assets/test.png")
    this.add.rectangle(100, 100, 100, 100, 0xff0000)
  }

  create(): void {
    this.add.image(400, 300, "cat")
    this.add.image(200, 500, "test")

    // this.player = new Player({
    //   scene: this,
    //   x: Phaser.Math.RND.integerInRange(200, 500),
    //   y: Phaser.Math.RND.integerInRange(200, 500),
    //   key: "star",
    // })
  }
}

export default GameScene
