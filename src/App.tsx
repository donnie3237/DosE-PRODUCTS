import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers/Headers';
import Homepage from './components/HomePage/Homepage';
import { HashRouter as Router ,Route , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
       <Headers/>
       <Routes>
        <Route path='/' element={<Producteiei/>}></Route>
       </Routes>
    </div>
    </Router>
  )
}

export default App;
