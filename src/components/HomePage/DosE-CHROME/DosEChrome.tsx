import React from 'react'
import './chrome.scss'

function DosEChrome() {
  return (
    <div className='dl'>
        <div className="title flex">
            <h1>DosE-CHROME</h1>
        </div>
        <div className="contents flex">
            <img className='flex' src={require('./img/main.png')} alt="" />
        </div>
    </div>
  )
}

export default DosEChrome