import React, {useState, useEffect} from 'react';
// import Router from './Router';
// import Routes from './routes';
import './Tree.css';
import iPadProFrame from '../../assets/images/iPadProFrame.png';
// import { Link } from 'react-router-dom'; 
import SearchBar from '../../assets/images/SearchBar.png';
import Tree from '../../assets/images/Tree.png';
import TreeManicTemplate from '../../assets/videos/Tree.mp4';
import treeFilled from '../../assets/images/icons/tree-filled.png';
import nextTemplate from '../../assets/images/uDock/next-template.svg';
import previousTemplate from '../../assets/images/uDock/previous-template.svg';
import balloonWrench from '../../assets/images/uDock/balloon-wrench.png';
// import balloonWrenchFilled from '../../assets/images/uDock/balloon-wrench-filled.png';
import earth from '../../assets/images/uDock/earth.png';
// import earthFilled from '../../assets/images/uDock/earth-filled.png';
import clock from '../../assets/images/uDock/clock.png';
// import clockFilled from '../../assets/images/uDock/clock-filled.png';
import eye from '../../assets/images/uDock/eye.png';
// import eyeFilled from '../../assets/images/uDock/eye-filled.png';
import rotate from '../../assets/images/uDock/rotate.png';
import TreeVid from '../../assets/videos/Tree.mp4';

// NOTES: 
// These are like bookmark sections if you think about it.  
// Have the banner thing, explain this is all information, objective, that 
// Then on first load, you could show a visual that explains the grid...
// 6 Branches of Science: 
// 1.  Biology
// 2.  Mathematics
// 3.  Physics
// 4.  Chemistry
// 5.  Social Science
// 6.  All Else
// 6 Non-sciences: 
// 1.  Reference:  Things like records, etc
// 2.  History 
// 3.  Philosophy
// 4.  Arts
// 5.  Language Arts
// 6.  All Else




function Home() {
  const [omniLabel, setOmniLabel] = useState('Tree of Knowledge')
  const [dockVisible, setDockVisible] = useState(false)
  const [consumerVisible, setConsumerVisible] = useState(true)
  const [currentTemplate, setCurrentTemplate] = useState('Default')
  
  useEffect(() => {
    // cleanup
    // return () => setCurrentTemplate('Default');
}, [currentTemplate]);
  
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
      setOmniLabel('Tree of Knowledge')
  }

  const rotateGrid = () => {
    setConsumerVisible(!consumerVisible)
  }

  const treeClicked = () => {
  }

  const previousTemplateClicked = () => {
    setCurrentTemplate('Default')
  }

  const nextTemplateClicked = () => {
    setCurrentTemplate('Manic')
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
                  
                <div className="dockWithApps">
                  <div onClick={()=>previousTemplateClicked()} className="previousTemplateContainer">
                    <img src={previousTemplate} className="previousTemplate" alt=''/>
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

                  <div onClick={()=>nextTemplateClicked()} className="nextTemplateContainer">
                    <img src={nextTemplate} className="previousTemplate" alt=''/>
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

            {currentTemplate === 'Default' ? <img src={Tree} className="treeTemplate" alt="" /> : currentTemplate === 'Manic' ?
                <video preload="auto" autoPlay loop className="treeVid">
                <source src={TreeVid} type="video/mp4"></source>
                </video> :
          console.log('Manic')
}
              <div className="treeTopics">
                <div className="reference">Reference</div>
                <div className="arts">Arts</div>
                <div className="philosophy">Philosophy</div>
                <div className="history">History</div>
                <div className="languageArts">Language Arts</div>
                <div className="allElseNonSciences">All Else</div>
                <div className="biology">Biology</div>
                <div className="mathematics">Mathematics</div>
                <div className="physics">Physics</div>
                <div className="chemistry">Chemistry</div>
                <div className="socialSciences">Social Sciences</div>
                <div className="allElseSciences">All Else</div>
                <div className="metadata">Metadata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;