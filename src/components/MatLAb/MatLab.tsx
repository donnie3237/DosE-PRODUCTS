import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './Matlab.scss'

function MatLab() {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='intro'  className='flex'>AutoCad</NavLink>
            <NavLink to='electric' className='flex'>Matlab</NavLink>
            <NavLink to='metrix' className='flex'>MongoDB</NavLink>
            <NavLink to='vector' className='flex'>Git</NavLink>
            <NavLink to='statistic' className='flex'>Sass</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default MatLab