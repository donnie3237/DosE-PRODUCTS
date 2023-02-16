import React from 'react'
import './dose3.scss'
function Dose3() {
  return (
    <div className='dose3 flex'>
      <div className="img flex">
      <img src={require('./logo.png')} alt="" />
      </div>
      <div className="ins">
        -installain
      </div>
      <div className="therminal">
        <p>npm i -g dose3</p>
      </div>
      <div className="therminal">
        <p>pnpm i -g dose3</p> 
      </div>
      <div className="therminal">
        <p>yarn add -g dose3</p> 
      </div>
      <div className="ins">
        -useage
      </div>
      <div className="topic flex">
        anything what you want
      </div>
      <div className="contents contents2">
        <div className="box">Front-End</div>
        <div className="box">Back-End</div>
        <div className="box">Mobile APP</div>
        <div className="box">Desktop APP</div>
      </div>
      <div className="req">
        <h1>Require</h1>
      </div>
    </div>
  )
}

export default Dose3