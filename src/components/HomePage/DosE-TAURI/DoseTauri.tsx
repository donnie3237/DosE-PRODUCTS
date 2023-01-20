import React from 'react'
import './tauri.scss'

function DoseTauri() {
  return (
    <div className='dl'>
        <div className="title flex">
            <h1 className='flex'>DosE-TAURI</h1>
        </div>
        <div className="head-tauri flex">
            <img src={require('./img/tauri.png')} alt="" />
            <img src={require('./img/solid.jfif')} alt="" />
        </div>
        <div className="content-tr"></div>
    </div>
  )
}

export default DoseTauri