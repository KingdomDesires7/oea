import React, { useState, useEffect } from 'react';
import OmniboxPanel from '../../components/OmniboxPanel/OmniboxPanel';
import './Health.css';
import iPadProFrame from '../../assets/images/iPadProFrame.png';
import { Link } from 'react-router-dom'; 
import balloonWrench from '../../assets/images/uDock/balloon-wrench.png';
import HealthDock from '../../components/Docks/HealthDock';
import nextTemplate from '../../assets/images/uDock/downArrow.png';
import previousTemplate from '../../assets/images/uDock/upArrow.png';
// import balloonWrenchFilled from '../../assets/images/uDock/balloon-wrench-filled.png';
import earth from '../../assets/images/uDock/earth.png';
// import earthFilled from '../../assets/images/uDock/earth-filled.png';
import clock from '../../assets/images/uDock/clock.png';
// import clockFilled from '../../assets/images/uDock/clock-filled.png';
import eye from '../../assets/images/uDock/eye.png';
// import eyeFilled from '../../assets/images/uDock/eye-filled.png';
import rotate from '../../assets/images/uDock/rotate.png';
import Typed from "typed.js";
// * REDUX
import { useSelector } from 'react-redux';
// ! ~~~

function Health() {
  const appSelected = useSelector(state => state.appSelected);
//   const [omniLabel, setOmniLabel] = useState('Omnibox Extension App')
  const [dockVisible, setDockVisible] = useState(false)
  const [consumerVisible, setConsumerVisible] = useState(true)
  const [template, setTemplate] = useState('GApps');
  const [balloonWrenchOpen, setBalloonWrenchOpen] = useState(false)


    useEffect(() => {
      // return () => clearInterval(interval);
}, []);
  


//   const mouseLeaveIcon = () => {
//       setOmniLabel('Omnibox Extension App')
//   }

  const rotateGrid = () => {
    setConsumerVisible(!consumerVisible)
  }

  const treeClicked = () => {
  }

  const previousTemplateClicked = () => {
    if (template === 'DApps') {} else {
      setTemplate('DApps')
      const nextTempalateDiv = document.querySelector('nextTemplateContainer')
      nextTempalateDiv.style.display = 'none';
    }
  }

  const nextTemplateClicked = () => {
    if (template === 'GApps') {} else {
      setTemplate('GApps')
    }
  }

  const toggleDock = () => {
    setDockVisible(!dockVisible)
  }

  const balloonWrenchClicked = () => {
    const iPadShellContainer = document.querySelector('.iPadShellContainer')
    iPadShellContainer.style.pointerEvents = "none"
    if (!balloonWrenchOpen) {
      setBalloonWrenchOpen(true)
    } else {
      setBalloonWrenchOpen(false)
    }

  }

  return (
    <div className="mainContainer">
        <div className="iPadShellContainer"> { appSelected } 
        <img src={iPadProFrame} className="iPadShell" alt="" />

          <div className="iPadShell">
            <div  className="omniPanelContainer">
              <div  className="omniPanel">
                <OmniboxPanel toggleDock={toggleDock} dockIconVisible='health' />
                {dockVisible ? 
                <div className="dockContainer">
                <div className="dockWithApps">
                  <div onClick={()=>previousTemplateClicked()} className="previousTemplateContainer">
                    <img src={previousTemplate} className="previousTemplate" alt=''/>
                  </div>

                  <div onClick={() => balloonWrenchClicked()} className="balloonWrenchContainer">
                    <img src={balloonWrench} className="balloonWrench" alt=''/>
                  </div>  

                  <div className="earthContainer">
                    <img src={earth} className="earth" alt=''/>
                  </div>

                  <div onClick={()=>rotateGrid()} className="rotateContainer">
                    <img src={rotate} className="rotate" alt=''/>
                  </div>

                  <div className="eyeContainer">
                    <img src={eye} className="eye" alt=''/>
                  </div>

                  <div className="clockContainer">
                    <img src={clock} className="clock" alt=''/>
                  </div>

                  <div className="nextTemplateContainer">
                    <img onClick={()=>nextTemplateClicked()} src={nextTemplate} className="nextTemplate" alt=''/>
                  </div>
                </div>
              </div>
                :
              //   <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
              //   <div className="dock">
              //     {"omniLabel"}
              //   </div>
              // </div>
                  <HealthDock />
                }

              </div>
            </div>
            <div className="iPadContentSpace">




                </div>
            </div>
         </div>
      </div>
  );
}
export default Health;
