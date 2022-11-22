//import logo from './logo.svg';
import './App.css';
import './Konyv.css'
import Konyv from './Konyv.js';

const konyvTomb=[
{
    cim:"Malevil",
    szerzo:"Valaki",
    ar:30132
},
{
  cim:"Valami",
  szerzo:"Valaki2",
  ar:4325
},
{
  cim:"Valami2",
  szerzo:"Valaki3",
  ar:30132
}
]
function App() {
  function kosarKezeles(adat){
    console.log(adat)
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
      <footer><p>Xu Jiyu</p></footer>
    </div>
  );
}

export default App;
