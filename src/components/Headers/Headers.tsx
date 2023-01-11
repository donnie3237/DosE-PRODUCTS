import React from 'react'
import './Headers.scss'
import {NavLink} from 'react-router-dom'

type Props = {}

function Headers({}: Props) {
  return (
    <div className="Headers">
        <div className="logo flex">
            <a href="">DOSE</a>
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
        <div className="git"></div>
    </div>
  )
}

export default Headers