import { Player } from "../objects/Player"

class GameScene extends Phaser.Scene {
  //   private player: Player
  //   // private background: Phaser.GameObjects.TileSprite;
  //   // private scoreText: Phaser.GameObjects.BitmapText;
  //   // private timer: Phaser.Time.TimerEvent;

  constructor() {
    super({
      key: "Game",
    })
  }

  create(): void {
    this.add.rectangle(100, 100, 100, 100, 0xff00)
  }

  //     this.player = new Player({
  //       scene: this,
  //       x: 50,
  //       y: 100,
  //       key: "player",
  //     })
  //   }

  //   // init(): void {
  //   //   this.registry.set("score", -1)
  //   // }

  //   create(): void {}
}

export default GameScene
