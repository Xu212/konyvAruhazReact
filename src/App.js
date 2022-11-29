//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Kosar.css';
import './Konyv.css'
import Konyv from './Konyv.js';
import Kosar from './Kosar.js'
import KosarModel from './Model/KosarModel.js';

const konyvTomb=[
{   id:1,
    cim:"Malevil",
    szerzo:"Valaki",
    ar:30132
},
{ id:2,
  cim:"Valami",
  szerzo:"Valaki2",
  ar:4325
},
{
  id:3,
  cim:"Valami2",
  szerzo:"Valaki3",
  ar:30132
}
]
function App() {
  /** State-ek, reprezentálják az oldal állapotát és befrissítik az oldalra vonatkozó részét */
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  const km = new KosarModel(kosaram);
  function kosarKezeles(adat){
    setDb(km.getDb());
    setOsszAr(osszAr+adat.ar);
    km.setKosar(adat);
    setKosaram(km.getKosar());
    console.log(kosaram);
  }
  return (
    <div className="App">
      <header className="App-header">{
        /** 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>*/}
      <h1>Könyv Áruház</h1>
      </header>
      <section><p>A könyvek db száma: {db}</p></section>
      <article>
      <div className="konyvek">

      {
        konyvTomb.map((konyv, index)=>{
          return(<Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles}/>);
        }
        )
      }


    </div>
      </article>
      <section><p>Konyvek összára:{osszAr}</p></section>
      <section>
      <table><thead><tr>
      <th>cím</th><th>szerzo</th><th>ár</th><th>db</th>
      </tr></thead>
      <tbody>
      {kosaram.map((konyv,index)=>{
        return(<Kosar kosarObj={konyv} key={index}/>)
      })}
      </tbody>
      </table>
      </section>
      <footer><p>Xu Jiyu</p></footer>
    </div>
  );
}

export default App;
