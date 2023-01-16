import React from 'react'
import './chrome.scss'

function DosEChrome() {
  return (
    <div className='dl'>
        <div className="title flex">
            <h1>DosE-CHROME</h1>
        </div>
        <div className="contents flex">
            <img className='flex' src={require('./img/chrome.png')} alt="" />
            <img className='flex' src={require('./img/chrome2.png')} alt="" />
            <img className='flex' src={require('./img/chrome3.png')} alt="" />
        </div>
        <div className="hr"></div>
        <div className="cont flex">
          <h1>Bash</h1>
          <p>Bash is the programing language in this project we will Run command when have the event.</p>
          <div className="code">
            <p>D: // you can change to  C:,E:,another</p>
            <p>cd _______ //your local file path</p>
            <p>npm run dev</p>
            <p>cmd/k</p>
          </div>
          <h1>Visual Basic</h1>
          <p>visual basic for run shell:startup on Windows to make it auto run on background when your computer is starting up.</p>
          <div className="code">
            <p >Set WshShell = CreateObject("WScript.Shell") </p>
            <p>WshShell.Run chr(34) & " <div className="red">Your local .bat file</div> " & Chr(34), 0
Set WshShell = Nothing</p>
          </div>
        </div>
    </div>
  )
}

export default DosEChrome