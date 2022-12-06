//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './components/public/Kosar.css';
import './components/public/Konyv.css'
import Konyv from './components/public/Konyv.js';
import Kosar from './components/public/Kosar.js'
import KosarModel from './Model/KosarModel.js';
import Layout from "./pages/Layout";
import Public from './pages/Public.js';
import Admin from './pages/Admin.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <div className="App">
      <header className="App-header">

      <h1>Könyv Áruház</h1>
      </header>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>

  
      <footer><p>Xu Jiyu</p></footer>
    </div>
  );
}

export default App;
