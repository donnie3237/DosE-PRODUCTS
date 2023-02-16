import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './More.scss'

function More() {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='autocad'  className='flex'>AutoCad</NavLink>
            <NavLink to='electric' className='flex'>Matlab</NavLink>
            <NavLink to='mongodb' className='flex'>MongoDB</NavLink>
            <NavLink to='postgresql' className='flex'>PostgreSQL</NavLink>
            <NavLink to='git' className='flex'>Git</NavLink>
            <NavLink to='sass' className='flex'>Sass</NavLink>
            <NavLink to='docker' className='flex'>Docker</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default More