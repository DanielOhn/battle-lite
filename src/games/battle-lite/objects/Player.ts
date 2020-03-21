export class Player extends Phaser.GameObjects.Image {
  private up: Phaser.Input.Keyboard.Key
  // private left: Phaser.Input.Keyboard.Key;
  // private right: Phaser.Input.Keyboard.Key;
  // private down: Phaser.Input.Keyboard.Key;

  constructor(params: any) {
    super(params.scene, params.x, params.y, params.key, params.frame)

    this.setScale(2)

    this.scene.physics.world.enable(this)

    this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

    this.scene.add.existing(this)
  }

  update(): void {
    if (this.up.isDown) {
      // this.body.setVelocityY(-100);
    }
  }
}
