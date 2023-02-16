import React from 'react'
import './dose3.scss'
function Dose3() {
  return (
    <div className='dose3 flex'>
      <div className="img flex">
      <img src={require('./logo.png')} alt="" />
      </div>
      <div className="ins">
        -installation
      </div>
      <div className="therminal">
        <p>pnpm i -g dose3@latest</p> 
        <p className='comment'>//via pnpm</p>
      </div>
      <div className="therminal">
        <p>npm i -g dose3@latest</p>
        <p className='comment'>//via npm</p>
      </div>
      <div className="therminal">
        <p>yarn add -g dose3@latest</p> 
        <p className='comment'>//via yarn</p>
      </div>
      <div className="ins">
        -usage
      </div>
      <div className="therminal">
        <p>dose</p>
        <p className='comment'>//to start project</p>
      </div>
      <div className="therminal">
        <p>sora</p>
        <p className='comment'>//more information and update</p> 
      </div>
      <div className="topic flex">
        <h1>Do anything what you want</h1>
      </div>
      <div className="contents contents2">
        <div className="box">
        <h1>Front-End</h1>
        <div className="flex">
          <img src={require('./solid.png')} alt="" />
          <img src={require('./React.png')} alt="" />
        </div>
        </div>
        <div className="box">
          <h1>Back-End</h1>
           <img className='exp' src={require('./express.png')} alt="" />
        </div>
        <div className="box">
          <h1>Mobile App</h1>
          <div className="flex">
            <img src={require('./tauri.png')} alt="" />
          </div>
        </div>
        <div className="box">
        <h1>Desktop App</h1>
          <div className="flex">
            <img src={require('./tauri.png')} alt="" />
            <img src={require('./electron.png')} alt="" />
          </div>
        </div>
      </div>
      <div className="req">
        <h1 className='flex'>Require Tools</h1>
        <div className="contents contents2">
          <img className='box' src={require('./vscode.png')} alt="" />
          <svg className='box' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"></path> <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"></path> </g></svg>
          <img className='box' src={require('./node.png')} alt="" />
          <img className='box' src={require('./cargo.png')} alt="" />
          <img className='box' src={require('./sdk.png')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dose3