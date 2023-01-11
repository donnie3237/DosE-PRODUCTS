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
       </Routes>
       
    </div>
    </Router>
  )
}

export default App;
