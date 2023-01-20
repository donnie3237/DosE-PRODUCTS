import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import './Homepage.scss'

type Props = {}

function Homepage({}: Props) {
  return (
    <div className="homePage">
        <div className="side" id='side'>
            <NavLink to='doselib'  className='flex'>DosE-LIB</NavLink>
            <NavLink to='dosecrud' className='flex'>DosE-CRUD</NavLink>
            <NavLink to='doseml' className='flex'>DosE-ML</NavLink>
            <NavLink to='doseiot' className='flex'>DosE-IOT</NavLink>
            <NavLink to='dosechrome' className='flex'>DosE-CHROME</NavLink>
            <NavLink to='dosewtd' className='flex'>DosE-WTD</NavLink>
            <NavLink to='dosetauri' className='flex'>DosE-TAURI</NavLink>
            <NavLink to='doseacad' className='flex'>DosE-ACAD</NavLink>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

export default Homepage