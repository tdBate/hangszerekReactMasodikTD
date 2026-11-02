import { useState } from 'react'
import './App.css'
import { HangszerTabla } from "./components/HangszerTabla"
import { hangszerek, type OldalTipus, type Hangszer } from "./data"

function App() {
  const [data, setData] = useState(hangszerek)
  const [currentSite, setCurrentSite] = useState<OldalTipus>("index")

  function hozzaad(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const hangszer: Hangszer = {
      nev: formData.get("nev")!.toString() ?? "",
      tipus: formData.get("tipus")!.toString() ?? "",
      ar: parseInt(formData.get("ar")!.toString()) ?? 0,
      keszleten: true
    }

    setData([hangszer, ...data]);
  }

  function torles(index: number) {
    setData(data.filter((_, i) => index != i));
  }

  return (
    <>
      <button onClick={() => setCurrentSite("index")}>Index</button>
      <button onClick={() => setCurrentSite("admin")}>Admin</button>
      <button onClick={() => setCurrentSite("mod")}>Mod</button>


      {
        currentSite == "admin" && (
          <div>
            <form onSubmit={hozzaad}>
              <label htmlFor="nev">Név</label>
              <input name='nev' id="nev" type="text" /><br />

              <label htmlFor="keszleten">Készleten</label>
              <input name='keszleten' id="keszleten" type="checkbox" /><br />

              <label htmlFor="tipus">Típus</label>
              <input type="text" name='tipus' /><br />

              <label htmlFor="ar">Típus</label>
              <input type="number" name='ar' /><br />

              <button type="submit">Hozzáadás</button><br />
            </form>
            <HangszerTabla data={data} mod="admin" hangszerTorles={torles}></HangszerTabla>
          </div>
        )
      }

      {
        currentSite == "index" && (
          <HangszerTabla data={data} mod="index" hangszerTorles={torles}></HangszerTabla>
        )
      }

    </>
  )
}

export default App
