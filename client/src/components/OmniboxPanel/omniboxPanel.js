import React, { useEffect, useState } from 'react';
import './OmniboxPanel.css'
import dock from '../../assets/images/OmniPanel/dock.png';
import dockFilled from '../../assets/images/OmniPanel/dockFilled.png';
import search from '../../assets/images/OmniPanel/search.png';
//import hamburger from '../../assets/images/OmniPanel/hamburger.png';

export default function OmniboxPanel({ dockIconVisible, toggleDock }) {
  const [ localDockItem, setLocalDockItem ] = useState(dockIconVisible)
  const [ dockSelected, setDockSelected ] = useState(false)


  const hamburgerClicked = () => {
    console.log(`you have clicke the burger`)
  }

  const dockIconClicked = () => {
    const dockIcon = document.querySelector('.dockIcon')
    if (!dockSelected) {
      dockIcon.src = dockFilled
      setDockSelected(!dockSelected)
    } else {
      dockIcon.src = dock
      setDockSelected(!dockSelected)
    }

    if (dockIconVisible === 'health') {
      toggleDock()
    }

  }

  useEffect(() => {
      // alert(localDockItem)
    }, [localDockItem]);


  return (
    <div className="omniboxPanelContainer">
        <div onClick={()=>dockIconClicked() } className="omniboxLeftIconContainer">
           {
           localDockItem === 'home' || "tree" &&  localDockItem !== 'health' ? 
           <img className="searchIcon" alt='' src={search} /> : 
                <img onClick={() => dockIconClicked()} alt='' className="dockIcon" src={dock} />
                     }
            </div>
        <div className="omniboxSearchContainer">
            <input className="omniboxSearchInput"></input>
            <div onMouseOver={() => hamburgerClicked()} className="hamburgerIcon"></div>
        </div>  
    </div>
  )
}