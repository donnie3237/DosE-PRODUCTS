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
          <h1>Bat file</h1>
          <p>.Bat is the from runner file in this project we will Run command when have the event(open).</p>
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
            <p>WshShell.Run chr(34) & "Your local path .bat file" </p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="tools flex">
          <h1>Tools</h1>
          <div className="img flex">
            <img src={require('./img/git.png')} alt="" />
            <img src={require('./img/nodeJS.png')} alt="" />
            <img src={require('./img/vscode.png')} alt="" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="step flex">
          <h1>Step</h1>
          <div className="s1">
            <h2>--{'>'} Step1</h2>
            <div className="command flex">
              <p>git clone https://github.com/donnie3237/Chrome.git</p>
              <p>cd chrome</p>
              <p>npm run dev</p>
            </div>
          </div>
          <div className="s1">
            <h2>--{'>'} Step2</h2>
            <p>Set .bat file and VisualBasic File</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="tools flex">
          <h1>Tech Stack</h1>
          <div className="img flex">
          <img src={require('./img/pnpm.jpg')} alt="" />
          <img src={require('./img/vite.jfif')} alt="" />
          <img src={require('./img/solid.jfif')} alt="" />
          </div>
        </div>
        <div className="hr"></div>
    </div>
  )
}

export default DosEChrome