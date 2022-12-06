//import logo from './logo.svg';
import { useState } from "react";
import "../App.css";
import "../components/public/Kosar.css";
import "../components/public/Konyv.css";
import Konyv from "../components/public/Konyv.js";
import Kosar from "../components/public/Kosar.js";
import KosarModel from "../Model/KosarModel.js";

const konyvTomb = [
  { id: 1, cim: "Malevil", szerzo: "Valaki", ar: 30132 },
  { id: 2, cim: "Valami", szerzo: "Valaki2", ar: 4325 },
  {
    id: 3,
    cim: "Valami2",
    szerzo: "Valaki3",
    ar: 30132,
  },
];
const km = new KosarModel(kosaram);
function Public() {
  /** State-ek, reprezentálják az oldal állapotát és befrissítik az oldalra vonatkozó részét */
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  function kosarKezeles(adat) {
    setDb(km.getDb());
    setOsszAr(osszAr + adat.ar);
    km.setKosar(adat);
    setKosaram(km.getKosar());
    //console.log(kosaram);
  }

  function hozzaad(){
    km.elemHozzaad();
  }
  function kivon(){
    
  }
  function torol(){
    
  }
  return (
    <>
      <section>
        <p>A könyvek db száma: {db}</p>
      </section>
      <article>
        <div className="konyvek">
          {konyvTomb.map((konyv, index) => {
            return (
              <Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />
            );
          })}
        </div>
      </article>
      <section>
        <p>Konyvek összára:{osszAr}</p>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>cím</th>
              <th>szerzo</th>
              <th>ár</th>
              <th>db</th>
            </tr>
          </thead>
          <tbody>
            {kosaram.map((konyv, index) => {
              return <Kosar kosarObj={konyv} key={index} />;
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Public;
