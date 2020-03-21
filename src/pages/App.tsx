import * as React from "react"

import "../styles/App.css"
import Game, { config } from "../games/battle-lite/Game"

// import Hello from '../components/Hello'

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    new Game(config)
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
