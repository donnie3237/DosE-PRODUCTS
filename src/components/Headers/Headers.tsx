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
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/js'>JavaScript</NavLink>
            <NavLink to='/rust'>Rust</NavLink>
            <NavLink to='/matlab'>Matlab</NavLink>
            <NavLink to='/autocad'>Autocad</NavLink>
        </div>
        <div className="git"></div>
    </div>
  )
}

export default Headers