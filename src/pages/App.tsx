import * as React from "react"
import Phaser from "phaser"

import "../styles/App.css"
import MainScene from "../game/MainScene"

// import Hello from '../components/Hello'

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    const game = new Phaser.Game({
      parent: "game-root",
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: [MainScene],
    })
  }

  render() {
    return (
      <>
        <div id="game-root"></div>
        This is REACT!
      </>
    )
  }
}

export default App
