import React from "react"
import "../styles/App.css"

import Hello from "../components/HelloWord"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yeet</h1>
        <Hello name="test" />
      </header>
    </div>
  )
}

export default App
