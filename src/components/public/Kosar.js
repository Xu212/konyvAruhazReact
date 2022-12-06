function Kosar(props){
    return(
        <tr>
        <td>{props.kosarObj.cim}</td>
        <td>{props.kosarObj.szerzo}</td>
        <td>{props.kosarObj.ar}</td>
        <td>{props.kosarObj.db}</td>
        <td><button onclick={} className="hozza">+</button></td>
        <td><button onclick={} className="minus">-</button></td>
        <td><button onclick={} className="torles">Törlés</button></td>
        </tr>
    )
}
export default Kosar