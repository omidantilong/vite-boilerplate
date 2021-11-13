import { useState } from "react"
import logo from "./logo.svg"
import { Header } from "./components/Layout/Header"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  var piss = "hello"
  return (
    <div className="page">
      <Header />
    </div>
  )
}

export default App
