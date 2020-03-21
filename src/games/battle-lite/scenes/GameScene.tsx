import { Player } from "../objects/Player"

import star from "../assets/star.png"

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
    this.load.image("star", "../assets/star.png")
  }

  create(): void {
    this.add.rectangle(100, 100, 100, 100, 0xff0000)

    this.add.sprite(400, 300, "star")

    // this.player = new Player({
    //   scene: this,
    //   x: Phaser.Math.RND.integerInRange(200, 500),
    //   y: Phaser.Math.RND.integerInRange(200, 500),
    //   key: "star",
    // })
  }
}

export default GameScene
