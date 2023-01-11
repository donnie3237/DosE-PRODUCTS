import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './js.scss'

type Props = {}

function JavascriptMain({}: Props) {
  return (
    <div className="JsPage">
        <div className="side" id='side'>
            <NavLink to='Reactjs'  className='flex'>ReactJS</NavLink>
            <NavLink to='Electronjs' className='flex'>ElectronJS</NavLink>
            <NavLink to='expressjs' className='flex'>ExpressJS</NavLink>
            <NavLink to='tensorflowjs' className='flex'>TensorflowJS</NavLink>
            <NavLink to='Nodered' className='flex'>Node-Red</NavLink>
            <NavLink to='solidjs' className='flex'>SolidJS</NavLink>
            <NavLink to='d3js' className='flex'>D3JS</NavLink>
            <NavLink to='chartjs' className='flex'>ChartJS</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default JavascriptMain