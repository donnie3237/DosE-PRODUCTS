import React from 'react'
import './Headers.scss'
import {NavLink} from 'react-router-dom'

function Headers() {
  function ToGithub(){
    window.open('https://github.com/donnie3237','_blank')
  }
  return (
    <div className="Headers">
        <div className="logo flex">
            <div className="text flex"><NavLink className='flex' to='/'>DOSE</NavLink></div>
        </div>
        <div className="nav flex">
            <NavLink to='/products' className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
            </svg>
            <h2>
              Product
            </h2>
            </NavLink>
            <NavLink to='/javascript' className='flex'>
              <img src={require('./img/js.png')} alt="" />
              <h2>JS&TS</h2>
              </NavLink>
            <NavLink to='/rust' className='flex'>
              <img src={require('./img/rust.png')} alt="" />
              <h2>
                Rust
              </h2>
              </NavLink>
            <NavLink to='/matlab' className='flex'>
              <img src={require('./img/Matlab_Logo.png')} alt="" />
              <h2>Matlab</h2>
              
              </NavLink>
        </div>
        <div className="git flex" onClick={ToGithub}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </div>
    </div>
  )
}

export default Headers