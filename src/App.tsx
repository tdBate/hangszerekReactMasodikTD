import { useState } from 'react'
import './App.css'
import { HangszerTabla } from "./components/HangszerTabla"
import { hangszerek } from "./data"

function App() {
    const [data, setData] = useState(hangszerek)

  return (
    <>
      <HangszerTabla data={data}></HangszerTabla>
    </>
  )
}

export default App
