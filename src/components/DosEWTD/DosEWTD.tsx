import './wtd.scss'

function DosEWTD() {
  return (
    <div className='wtd'>
        <h1 className='flex'>DosE-WTD</h1>
        <img  src={require('./img/logo.jpg')} alt="" />
        <div className="contents flex">
            <h1 className='flex'>DosE-WebToDesktopApp</h1>
            <div className="title">
              <h2>What is dose WTD</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, ab ad officiis quam omnis sed odio corrupti expedita, ipsam eum earum illo nobis cupiditate error! Harum totam illo commodi praesentium?</p>
            </div>
            <div className="tools flex">
              <h2>tools</h2>
              <div className="img flex">
                <img src={require('../HomePage/DosE-CHROME/img/git.png')} alt="" />
                <img src={require('../HomePage/DosE-CHROME/img/vscode.png')} alt="" />
                <img src={require('../HomePage/DosE-CHROME/img/nodeJS.png')} alt="" />
              </div>
            </div>
            <div className="stepOne">
              <p>Step1</p>
            </div>
            <div className="command flex">
              <p>npx dose-wtd my-app</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default DosEWTD