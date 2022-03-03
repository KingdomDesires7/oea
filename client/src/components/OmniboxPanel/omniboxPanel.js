import React, { useEffect } from 'react';
import './omniboxPanel.css'
import dock from '../../assets/images/OmniPanel/dock.png';
// import dockFilled from '../../assets/images/OmniPanel/dockFilled.png';
import search from '../../assets/images/OmniPanel/search.png';
import hamburger from '../../assets/images/OmniPanel/hamburger.png';

export default function OmniboxPanel({ dockIconVisible }) {


  const dockIconClicked = () => {
    dockIconVisible = true
  }

  const hamburgerClicked = () => {
    alert(`you have clicke the burger`)
  }

  useEffect(() => {
    // alert(dockIconVisible)
}, [dockIconVisible]);


  return (
    <div className="omniboxPanelContainer">
        <div onClick={()=>dockIconClicked() } className="omniboxLeftIconContainer">
           {dockIconVisible ? 
                <img alt='' className="dockIcon" src={dock}></img> : 
                    <img className="searchIcon" alt='' src={search}></img> }

            </div>
        <div className="omniboxSearchContainer">
            <input className="omniboxSearchInput"></input>
            <div onClick={() => hamburgerClicked()} className="hamburgerIcon"></div>
        </div>  

    </div>
  )
}