import type { Hangszer, OldalTipus } from "../data";

interface HangszerTablaProps {
    data: Hangszer[];
    mod: OldalTipus;
    hangszerTorles: (id: number) => void;
}

export function HangszerTabla(props: HangszerTablaProps) {
    return (
        <>
            <table>
                <thead><tr><td>Név</td> <td>Típus</td> <td>Ár</td> <td>Készleten</td> </tr></thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr>
                            <td>{item.nev}</td>
                            <td>{item.tipus}</td>
                            <td>{item.ar}</td>
                            <td>{item.keszleten ? "✅" : "❌"}</td>

                            {
                                props.mod == "admin" && (
                                    <td><div>
                                        <button onClick={() => { props.hangszerTorles(index) }}>Törlés</button>
                                    </div></td>
                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}