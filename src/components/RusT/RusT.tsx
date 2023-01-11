import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'

type Props = {}

function RusT({}: Props) {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='tauri'  className='flex'>Tauri</NavLink>
            <NavLink to='mosec' className='flex'>MosecRS</NavLink>
            <NavLink to='actix' className='flex'>Actix-web</NavLink>
            <NavLink to='sled' className='flex'>sled</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default RusT