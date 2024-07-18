import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Expreience Download <br/> Mr Chef App</p>
      <div className="app-download-platforms">
        <img src={assets.app_store} alt="" /> <img src={assets.play_store}alt="" />
        
      </div>
    </div>
  )
}

export default AppDownload
