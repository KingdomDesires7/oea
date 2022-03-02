import React from 'react';
import './omniboxPanel.css'
import toggleOff from '../../assets/images/OmniPanel/toggleOff.png';
import toggleOn from '../../assets/images/OmniPanel/toggleOn.png';

export default function omniboxPanel() {
  return (
    <div className="omniboxPanelContainer">
        <div className="omniboxLeftIconContainer">
            <img></img>
            </div>
        <div className="omniboxSearchContainer">
            <input className="omniboxSearchInput"></input>
            </div>  
        <div className="omniboxLeftIconContainer">
            <img></img>
            </div>
            
    </div>
  )
}