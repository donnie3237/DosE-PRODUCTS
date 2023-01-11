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
            <NavLink to='/products' className='flex'>Product</NavLink>
            <NavLink to='/javascript' className='flex'>JavaScript</NavLink>
            <NavLink to='/rust' className='flex'>Rust</NavLink>
            <NavLink to='/matlab' className='flex'>Matlab</NavLink>
            <NavLink to='/autocad' className='flex'>Autocad</NavLink>
        </div>
        <div className="git"></div>
    </div>
  )
}

export default Headers