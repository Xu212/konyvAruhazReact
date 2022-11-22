import './Konyv.css'
function Konyv(props){
    function kosarba(){
        console.log(props.konyvObj.ar)
        props.kosarKezeles(props.konyvObj);
    }
    return(
        <div className = "Konyv">
            <h3>{props.konyvObj.cim}</h3>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            <button onClick={kosarba}> Kosárba</button>
        </div>
    );
}
export default Konyv