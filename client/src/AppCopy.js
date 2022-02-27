import React, {useState} from 'react';
import Router from './Router';
import Routes from './routes';
import './App.css';
import iPadProFrame from './assets/images/iPadProFrame.png';
import { Link } from 'react-router-dom'; 
import Consumer from './assets/images/Consumer.png';
import Business from './assets/images/Business.png';
import SearchBar from './assets/images/SearchBar.png';
import tree from './assets/images/icons/tree.png';
import nextTemplate from './assets/images/uDock/next-template.svg';
import previousTemplate from './assets/images/uDock/previous-template.svg';
import balloonWrench from './assets/images/uDock/balloon-wrench.png';
import balloonWrenchFilled from './assets/images/uDock/balloon-wrench-filled.png';
import earth from './assets/images/uDock/earth.png';
import earthFilled from './assets/images/uDock/earth-filled.png';
import clock from './assets/images/uDock/clock.png';
import clockFilled from './assets/images/uDock/clock-filled.png';
import eye from './assets/images/uDock/eye.png';
import eyeFilled from './assets/images/uDock/eye-filled.png';
import rotate from './assets/images/uDock/rotate.png';

function App() {
  const [omniLabel, setOmniLabel] = useState('Omnibox Extension App')
  const [dockVisible, setDockVisible] = useState(false)
  const [consumerVisible, setConsumerVisible] = useState(true)
  
  const mouseOverDock = () => {
    if (dockVisible) {
      setDockVisible(false)
    } else { setDockVisible(true) }
  }

  const mouseLeaveDock = () => {
    if (dockVisible) {
      setDockVisible(false)
    } else { setDockVisible(true) }
  }

  const mouseOverIcon = (Icon) => {
    if (Icon === 'tree') {
      setOmniLabel('Tree of Knowledge')
    }
  }

  const mouseLeaveIcon = () => {
      setOmniLabel('Omnibox Extension App')
  }

  const rotateGrid = () => {
    setConsumerVisible(!consumerVisible)
  }

  const treeClicked = () => {
    alert('tree')
  }

  return (
    <Router history={history}>
    <div className="mainContainer">
        <div className="iPadShellContainer">
        <img src={iPadProFrame} className="iPadShell" alt="" />

          <div className="iPadShell">
            <div  className="omniPanelContainer">
              <div  className="omniPanel">
                <div className="omniSearch">
                <img src={SearchBar} className="omniSearch" alt="" />
                </div>



                {dockVisible ? 
                <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  
                <div className="dockWithApps">
                  <div className="nextTemplateContainer">
                    <img src={nextTemplate} className="nextTemplate" alt=''/>
                  </div>

                  <div className="balloonWrenchContainer">
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
                    <img src={previousTemplate} className="previousTemplate" alt=''/>
                  </div>
                </div>
              </div>
                :
                  <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  <div className="dock">
                    {omniLabel}
                  </div>
                </div>
                }

              </div>
            </div>
            <div className="iPadContentSpace">

                { consumerVisible ?
                <>
              <img src={Consumer} className="consumerTemplate" alt="" />
              <Link to='/tree'>
                <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('tree')} onMouseLeave={() => mouseLeaveIcon()} className="treeContainerC">
                  <img src={tree} alt='' className="tree" />
                </div> 
              </Link>
              </>
              :
              <>
              <img src={Business} className="businessTemplate" alt="" />
              <div onMouseEnter={() => mouseOverIcon('tree')} onMouseLeave={() => mouseLeaveIcon()} className="treeContainerB">
                <img src={tree} alt='' className="tree" />
              </div>
              </>

                }


            </div>
          </div>
        </div>
      </div>
      </Router>
  );
}

export default App;
