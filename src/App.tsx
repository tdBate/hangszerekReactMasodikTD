import { useState, type FormEvent } from 'react'
import './App.css'
import { HangszerTabla } from "./components/HangszerTabla"
import { hangszerek, type OldalTipus, type Hangszer } from "./data"

function App() {
  const [data, setData] = useState(hangszerek)
  const [currentSite, setCurrentSite] = useState<OldalTipus>("mod")
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const szerkesztett = editIndex == null ? null : data[editIndex]

  function hozzaad(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const hangszer: Hangszer = {
      nev: String(formData.get("nev")),
      tipus: String(formData.get("tipus")),
      ar: Number(formData.get("ar")),
      keszleten: formData.get("keszleten") == "on",
    }

    if (editIndex === null) {
      setData([hangszer, ...data])
    } else {
      setData(data.map((a, i) => i == editIndex ? hangszer : a))
    }
    setEditIndex(null)
  }

  function torles(index: number) {
    setData(data.filter((_, i) => index != i));
  }

  function flipKeszketen(index: number) {
    setData((data) => data.map((a, i) => i == index ? { ...a, keszleten: !a.keszleten } : a))
  }

  function modositKezd(index: number) {
    setEditIndex(index)
  }

  return (
    <>
      <button onClick={() => setCurrentSite("index")}>Index</button>
      <button onClick={() => setCurrentSite("admin")}>Admin</button>
      <button onClick={() => setCurrentSite("mod")}>Mod</button>


      {
        currentSite == "admin" && (
          <form key={editIndex ?? "uj"} onSubmit={hozzaad}>
            <label htmlFor="nev">Név</label>
            <input id="nev" name="nev" type="text" defaultValue={szerkesztett?.nev ?? ""} /><br />

            <label htmlFor="tipus">Típus</label>
            <input id="tipus" name="tipus" type="text" defaultValue={szerkesztett?.tipus ?? ""} /><br />

            <label htmlFor="ar">Ár</label>
            <input id="ar" name="ar" type="number" defaultValue={szerkesztett?.ar ?? 0} /><br />

            <label htmlFor="keszleten">Készleten</label>
            <input id="keszleten" name="keszleten" type="checkbox" defaultChecked={szerkesztett?.keszleten ?? false} /><br />

            <button type="submit">{editIndex === null ? "Hozzáadás" : "Mentés"}</button>
            {editIndex !== null && <button type="button" onClick={() => setEditIndex(null)}>Mégse</button>}
          </form>
        )
      }

      <HangszerTabla
        data={data}
        mod={currentSite}
        hangszerTorles={torles}
        hangszerModositKezd={modositKezd}
        flipKeszketen={flipKeszketen}
      />

    </>
  )
}

export default App
