import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './js.scss'

function JavascriptMain() {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='Reactjs'  className='flex'>ReactJS</NavLink>
            <NavLink to='Electronjs' className='flex'>ElectronJS</NavLink>
            <NavLink to='expressjs' className='flex'>ExpressJS</NavLink>
            <NavLink to='tensorflowjs' className='flex'>TFJS</NavLink>
            <NavLink to='Nodered' className='flex'>Node-Red</NavLink>
            <NavLink to='solidjs' className='flex'>SolidJS</NavLink>
            <NavLink to='d3js' className='flex'>D3JS</NavLink>
            <NavLink to='chartjs' className='flex'>ChartJS</NavLink>
            <NavLink to='vitejs' className='flex'>ViteJS</NavLink>
            <NavLink to='pnpm' className='flex'>PNPM</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default JavascriptMain