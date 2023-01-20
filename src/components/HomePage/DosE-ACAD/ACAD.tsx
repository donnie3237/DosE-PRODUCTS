import React from 'react'
import './acad.scss'
function ACAD() {
  return (
    <div className='dl'>
        <div className="title ttcad flex">
            <h1 className='flex'>DosE-ACAD</h1>
        </div>
        <div className="logo-acad flex">
            <img src={require('./img/Autocad-Symbol.png')} alt="" />
        </div>
        <div className="Acadcontent">
            <div className="In2d">
                <h1>2D model</h1>
                <p>-model1</p>
                <p>-model2</p>
                <p>-model3</p>
            </div>
            <div className="In3d">
                <h1>3D model</h1>
                <p>-model1</p>
                <p>-model2</p>
                <p>-model3</p>
            </div>
        </div>
    </div>
  )
}

export default ACAD