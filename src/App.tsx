import React from 'react';
import './App.scss';
import Headers from './components/Headers/Headers';
import Homepage from './components/HomePage/Homepage';
import { HashRouter as Router ,Route , Routes } from 'react-router-dom';
import DosELIB from './components/HomePage/DosE-LIB/DosELIB';
import DosECRUD from './components/HomePage/DosE-CRUD/DosECRUD';
import DosEML from './components/HomePage/DosE-ML/DosEML';
import DosEIOT from './components/HomePage/DosE-IOT/DosEIOT';
import JavascriptMain from './components/JavaScript/JavascriptMain';
import ReactJS from './components/JavaScript/ReactJS/ReactJS';
import ChartJS from './components/JavaScript/ChartJs/ChartJS';
import D3JS from './components/JavaScript/D3JS/D3JS';
import SolidJS from './components/JavaScript/SolidJs/SolidJS';
import NodeRed from './components/JavaScript/NodeRed/NodeRed';
import TFJS from './components/JavaScript/TFJS/TFJS';
import ExpressJS from './components/JavaScript/ExpressJS/ExpressJS';
import ElectronJS from './components/JavaScript/ElectronJS/ElectronJS';
import RusT from './components/RusT/RusT';
import Tauri from './components/RusT/Tauri/Tauri';
import Sled from './components/RusT/sled/Sled';
import Actix from './components/RusT/Actix/Actix';
import Mosec from './components/RusT/Mosec/Mosec';
import MatLab from './components/More/More';
import Autocad from './components/More/Autocad/Autocad';
import Elec from './components/More/Elec/Elec';
import MongoDB from './components/More/MongoDB/MongoDB';
import DosEChrome from './components/HomePage/DosE-CHROME/DosEChrome';
import ViteJS from './components/JavaScript/ViteJS/Vite';
import PNPM from './components/JavaScript/pnpm/PNPM';
import Cargo from './components/RusT/Cargo/Cargo';
import ACAD from './components/HomePage/DosE-ACAD/ACAD';
import Err from './Pages/Err/Err';
import Dose3 from './components/HomePage/DosE-DOSE3/Dose3';
import Git from './components/More/Git/Git';
import Sass from './components/More/Sass/Sass';
import Docker from './components/More/Docker/Docker';
import PostgreSQL from './components/More/PostgreSQL/PostgreSQL';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="head">
       <Headers/>
       </div>
       <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/products' element={<Homepage/>}>
             <Route path='' element={<DosELIB/>}/>
             <Route path='doselib' element={<DosELIB/>}/>
             <Route path='dosecrud' element={<DosECRUD/>}/>
             <Route path='doseml' element={<DosEML/>}/>
             <Route path='doseiot' element={<DosEIOT/>}/>
             <Route path='dosechrome' element={<DosEChrome/>}/>
             <Route path='dose3' element={<Dose3/>}/>
             <Route path='doseacad' element={<ACAD/>}/>
          </Route>
          <Route path='/javascript' element={<JavascriptMain/>}>
            <Route path='' element={<ReactJS/>}/>
            <Route path='reactjs' element={<ReactJS/>}/>
            <Route path='electronjs' element={<ElectronJS/>}/>
            <Route path='expressjs' element={<ExpressJS/>}/>
            <Route path='tensorflowjs' element={<TFJS/>}/>
            <Route path='nodered' element={<NodeRed/>}/>
            <Route path='solidjs' element={<SolidJS/>}/>
            <Route path='d3js' element={<D3JS/>}/>
            <Route path='chartjs' element={<ChartJS/>}/>
            <Route path='vitejs' element={<ViteJS/>}/>
            <Route path='pnpm' element={<PNPM/>}/>
          </Route>
          <Route path='/rust' element={<RusT/>}>
            <Route path='' element={<Cargo/>}/>
            <Route path='Cargo' element={<Cargo/>}/>
            <Route path='tauri' element={<Tauri/>}/>
            <Route path='mosec' element={<Mosec/>}/>
            <Route path='actix' element={<Actix/>}/>
            <Route path='sled' element={<Sled/>}/>
          </Route>
          <Route path='/more' element={<MatLab/>}>
            <Route path='' element={<Autocad/>}/>
            <Route path='autocad' element={<Autocad/>}/>
            <Route path='electric' element={<Elec/>}/>
            <Route path='mongodb' element={<MongoDB/>}/>
            <Route path='postgresql' element={<PostgreSQL/>}/>
            <Route path='git' element={<Git/>}/>
            <Route path='sass' element={<Sass/>}/>
            <Route path='docker' element={<Docker/>}/>
          </Route>
          <Route path='*' element={<Err/>}/>
       </Routes>
       </Router>
    </div>
    
  )
}

export default App;