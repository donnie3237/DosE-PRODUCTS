import React from 'react';
import './App.scss';
import Headers from './components/Headers/Headers';
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
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
import MatLab from './components/MatLAb/MatLab';
import Intro from './components/MatLAb/intro/Intro';
import Elec from './components/MatLAb/Elec/Elec';
import Metrix from './components/MatLAb/Metrix/Metrix';
import Vector from './components/MatLAb/Vector/Vector';
import Statistic from './components/MatLAb/Statistic/Statistic';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="head">
       <Headers/>
       </div>
       <Routes>
          <Route path='/' element={<Homepage/>}>
            <Route path='/' element={<DosELIB/>}/>
            <Route path='doselib' element={<DosELIB/>}/>
            <Route path='dosecrud' element={<DosECRUD/>}/>
            <Route path='doseml' element={<DosEML/>}/>
            <Route path='doseiot' element={<DosEIOT/>}/>
          </Route>
          <Route path='/products' element={<Homepage/>}>
             <Route path='' element={<DosELIB/>}/>
             <Route path='doselib' element={<DosELIB/>}/>
             <Route path='dosecrud' element={<DosECRUD/>}/>
             <Route path='doseml' element={<DosEML/>}/>
             <Route path='doseiot' element={<DosEIOT/>}/>
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
          </Route>
          <Route path='/rust' element={<RusT/>}>
            <Route path='' element={<Tauri/>}/>
            <Route path='tauri' element={<Tauri/>}/>
            <Route path='mosec' element={<Mosec/>}/>
            <Route path='actix' element={<Actix/>}/>
            <Route path='sled' element={<Sled/>}/>
          </Route>
          <Route path='/matlab' element={<MatLab/>}>
            <Route path='' element={<Intro/>}/>
            <Route path='intro' element={<Intro/>}/>
            <Route path='electric' element={<Elec/>}/>
            <Route path='metrix' element={<Metrix/>}/>
            <Route path='vector' element={<Vector/>}/>
            <Route path='statistic' element={<Statistic/>}/>
          </Route>
       </Routes>
       
    </div>
    </Router>
  )
}

export default App;
