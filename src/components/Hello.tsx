import * as React from "react"
import Phaser from "phaser"

import cat from "../images/cat.jpg"

interface Props {
  name: string
}

let Hello = (props: Props): JSX.Element => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

// class Main extends Phaser.Scene {
//   constructor() {
//     this.cat = new Cat(this)
//   }

//   preload() {
//     this.load.image("cat", cat)
//   }
// }

class Cat extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene) {
    super(scene)
    scene.add.image(0, 0, "cat")
  }
}

export default Hello
