import React, {useState} from 'react';
import './App.css';
import iPadProFrame from './assets/images/iPadProFrame.png';
// import Consumer from './assets/images/ConsumerTemplate.png';
import Consumer from './assets/images/Consumer.png';
import SearchBar from './assets/images/SearchBar.png';
import tree from './assets/images/icons/tree.png';

function App() {
  const [omniLabel, setOmniLabel] = useState('Omnibox Extension App')
  const [dockVisible, setDockVisible] = useState(false)
  
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

  return (
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
                  <div className="dock">
                    {'DockAppsBaby'}
                  </div>
                </div> :
                  <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  <div className="dock">
                    {omniLabel}
                  </div>
                </div>
                }

              </div>
            </div>
            <div className="iPadContentSpace">
            <img src={Consumer} className="consumerTemplate" alt="" />
              <div onMouseEnter={() => mouseOverIcon('tree')} onMouseLeave={() => mouseLeaveIcon()} className="treeContainer">
                <img src={tree} className="tree"/>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
