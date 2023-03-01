import React from 'react';
import './App.scss';
import Headers from './components/Headers/Headers';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import DosELIB from './Pages/HomePage/DosE-LIB/DosELIB';
import DosECRUD from './Pages/HomePage/DosE-CRUD/DosECRUD';
import DosEML from './Pages/HomePage/DosE-ML/DosEML';
import DosEIOT from './Pages/HomePage/DosE-IOT/DosEIOT';
import JavascriptMain from './Pages/JavaScript/JavascriptMain';
import ReactJS from './Pages/JavaScript/ReactJS/ReactJS';
import ChartJS from './Pages/JavaScript/ChartJs/ChartJS';
import D3JS from './Pages/JavaScript/D3JS/D3JS';
import SolidJS from './Pages/JavaScript/SolidJs/SolidJS';
import NodeRed from './Pages/JavaScript/NodeRed/NodeRed';
import TFJS from './Pages/JavaScript/TFJS/TFJS';
import ExpressJS from './Pages/JavaScript/ExpressJS/ExpressJS';
import ElectronJS from './Pages/JavaScript/ElectronJS/ElectronJS';
import RusT from './Pages/RusT/RusT';
import Tauri from './Pages/RusT/Tauri/Tauri';
import Sled from './Pages/RusT/sled/Sled';
import Actix from './Pages/RusT/Actix/Actix';
import Mosec from './Pages/RusT/Mosec/Mosec';
import MatLab from './Pages/More/More';
import Autocad from './Pages/More/Autocad/Autocad';
import Elec from './Pages/More/Elec/Elec';
import MongoDB from './Pages/More/MongoDB/MongoDB';
import DosEChrome from './Pages/HomePage/DosE-CHROME/DosEChrome';
import ViteJS from './Pages/JavaScript/ViteJS/Vite';
import PNPM from './Pages/JavaScript/pnpm/PNPM';
import Cargo from './Pages/RusT/Cargo/Cargo';
import ACAD from './Pages/HomePage/DosE-ACAD/ACAD';
import Err from './Pages/Err/Err';
import Dose3 from './Pages/HomePage/DosE-DOSE3/Dose3';
import Git from './Pages/More/Git/Git';
import Sass from './Pages/More/Sass/Sass';
import Docker from './Pages/More/Docker/Docker';
import PostgreSQL from './Pages/More/PostgreSQL/PostgreSQL';
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