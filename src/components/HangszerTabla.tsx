import type { Hangszer, OldalTipus } from "../data";

interface HangszerTablaProps {
    data: Hangszer[];
    mod: OldalTipus;
    hangszerTorles: (id: number) => void;
    hangszerModositKezd: (id: number) => void;
    flipKeszketen: (id: number) => void;
}

export function HangszerTabla(props: HangszerTablaProps) {
    return (
        <>
            <table className="table">
                <thead><tr><td>Név</td> <td>Típus</td> <td>Ár</td> <td>Készleten</td> </tr></thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nev}</td>
                            <td>{item.tipus}</td>
                            <td>{item.ar}</td>


                            {
                                props.mod == "index" && (
                                    <td>{item.keszleten ? "✅" : "❌"}</td>)
                            }

                            {
                                props.mod == "mod" && (<>
                                    <td><button className="btn btn-success" onClick={() => props.flipKeszketen(index)}>{item.keszleten ? "✅" : "❌"}</button></td>
                                </>
                                )
                            }

                            {
                                props.mod == "admin" && (<>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => { props.hangszerTorles(index) }}>Törlés</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => { props.hangszerModositKezd(index) }}>Módosít</button>
                                    </td>
                                </>
                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}