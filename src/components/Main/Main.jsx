import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
<div className="main">
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>

<div className="maincontainer">
    <div className="greet">
        <p><span>Hello Garuda</span></p>
        <p>How can i help you man</p>
    </div>
    <div className="cards">
        <div className="card">
           
            <p>Suggest beautiful beach in nawabupeta</p>
           <img src={assets.compass_icon} alt="" />
        </div>


        <div className="card">
           
            <p>Breifly summaarize this concept: urban planning</p>
           <img src={assets.bulb_icon} alt="" />
        </div>

        <div className="card">
           
            <p>Brainstroming team bonding activities fort our work</p>
           <img src={assets.message_icon} alt="" />
        </div>

        <div className="card">
           
            <p>Improve the readaability  of the following code</p>
           <img src={assets.code_icon} alt="" />
        </div>
    
    </div>


    <div className="mainbottom">
        <div className="searchbox">
            <input type="text" placeholder='Enter the text here' />
          <div>
            <img src={assets.gallery_icon}alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon}alt="" />
          </div>
        
        </div>

    <p className="bottominfo">
        Gemini gives in  accurate information sometime please check again once
    </p>
</div>

</div>
</div>

  )
}

export default Main
