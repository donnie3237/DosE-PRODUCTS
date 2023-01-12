import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './Matlab.scss'

function MatLab() {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='intro'  className='flex'>introdution</NavLink>
            <NavLink to='electric' className='flex'>Electric Circuit</NavLink>
            <NavLink to='metrix' className='flex'>Metrix</NavLink>
            <NavLink to='vector' className='flex'>Vector</NavLink>
            <NavLink to='statistic' className='flex'>Statistic</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default MatLab