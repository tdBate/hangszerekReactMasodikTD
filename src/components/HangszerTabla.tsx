export function HangszerTabla(props: {data: Hangszer[]}) {
    return(
        <>
        <table>
            <thead><tr><td>Név</td> <td>Típus</td> <td>Ár</td> <td>Készleten</td> </tr></thead>
            <tbody>
                {props.data.map(item=>(
                    <tr>
                        <td>{item.nev}</td>
                        <td>{item.tipus}</td>
                        <td>{item.ar}</td>
                        <td>{item.keszleten?"✅":"❌"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}