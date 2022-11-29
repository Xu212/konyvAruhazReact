function Kosar(props){
    return(
        <tr>
        <td>{props.kosarObj.cim}</td>
        <td>{props.kosarObj.szerzo}</td>
        <td>{props.kosarObj.ar}</td>
        <td>{props.kosarObj.db}</td>
        <td><button className="hozza">+</button></td>
        <td><button className="minus">-</button></td>
        </tr>
    )
}
export default Kosar