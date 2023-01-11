import React from 'react';
import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <Router>
    <div className="App">
      <div className="head">
       <Headers/>
       </div>
       <Routes>
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
       </Routes>
       
    </div>
    </Router>
  )
}

export default App;
