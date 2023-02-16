import React from 'react'
import './main.scss'
import { useNavigate } from 'react-router-dom'

function Main() {
    const Navigate = useNavigate();
    function close(){
        const bar1 = document.querySelector('.bar1') as HTMLElement
    const bar2 = document.querySelector('.bar2') as HTMLElement
        bar1.style.width = '70vw'
        bar2.style.width = '70vw'
        bar1.style.transition = 'all 1s'
        bar2.style.transition = 'all 1s'
        setTimeout(() => {
            Navigate('/products')
        }, 1000);
    }
  return (
    <div className='main flex'>
       <h1>Welcome to dose</h1> 
       <button onClick={close}>Explore</button>
       <div className="bar bar1"></div>
       <div className="bar bar2"></div>
    </div>
  )
}

export default Main