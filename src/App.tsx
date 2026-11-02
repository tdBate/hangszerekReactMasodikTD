import { useState } from 'react'
import './App.css'
import { HangszerTabla } from "./components/HangszerTabla"
import { hangszerek, type OldalTipus } from "./data"

function App() {
    const [data, setData] = useState(hangszerek)
    const [currentSite, setCurrentSite] = useState<OldalTipus>("index")

  return (
    <>
      <button onClick={()=>setCurrentSite("index")}>Index</button>
      <button onClick={()=>setCurrentSite("admin")}>Admin</button>
      <button onClick={()=>setCurrentSite("mod")}>Mod</button>


    {
      currentSite == "index" && (
        <HangszerTabla data={data}></HangszerTabla>
      )
    }
      
    </>
  )
}

export default App
