// import React, {useState, useEffect} from 'react';
// // import Router from './Router';
// // import Routes from './routes';
// import './Tree.css';
// import iPadProFrame from '../../assets/images/iPadProFrame.png';
// // import { Link } from 'react-router-dom'; 
// import SearchBar from '../../assets/images/SearchBar.png';
// import Tree from '../../assets/images/Tree.png';
// import TreeManicTemplate from '../../assets/videos/Tree.mp4';
// import treeFilled from '../../assets/images/icons/tree-filled.png';
// import nextTemplate from '../../assets/images/uDock/next-template.svg';
// import previousTemplate from '../../assets/images/uDock/previous-template.svg';
// import balloonWrench from '../../assets/images/uDock/balloon-wrench.png';
// // import balloonWrenchFilled from '../../assets/images/uDock/balloon-wrench-filled.png';
// import earth from '../../assets/images/uDock/earth.png';
// // import earthFilled from '../../assets/images/uDock/earth-filled.png';
// import clock from '../../assets/images/uDock/clock.png';
// // import clockFilled from '../../assets/images/uDock/clock-filled.png';
// import eye from '../../assets/images/uDock/eye.png';
// // import eyeFilled from '../../assets/images/uDock/eye-filled.png';
// import rotate from '../../assets/images/uDock/rotate.png';

// function DApps() {
//   const [omniLabel, setOmniLabel] = useState('Tree of Knowledge')
//   const [dockVisible, setDockVisible] = useState(false)
//   const [consumerVisible, setConsumerVisible] = useState(true)
//   const [currentTemplate, setCurrentTemplate] = useState('Default')
  
//   useEffect(() => {
//     alert(currentTemplate[1])
//     // cleanup
//     // return () => clearInterval(interval);
// }, []);
  
//   const mouseOverDock = () => {
//     if (dockVisible) {
//       setDockVisible(false)
//     } else { setDockVisible(true) }
//   }

//   const mouseLeaveDock = () => {
//     if (dockVisible) {
//       setDockVisible(false)
//     } else { setDockVisible(true) }
//   }

//   const mouseOverIcon = (Icon) => {
//     if (Icon === 'tree') {
//       setOmniLabel('Tree of Knowledge')
//     }
//   }

//   const mouseLeaveIcon = () => {
//       setOmniLabel('Tree of Knowledge')
//   }

//   const rotateGrid = () => {
//     setConsumerVisible(!consumerVisible)
//   }

//   const treeClicked = () => {
//   }

//   const nextTemplateClicked = () => {
//   }

//   return (
//     <div className="mainContainer">
//         <div className="iPadShellContainer">
//         <img src={iPadProFrame} className="iPadShell" alt="" />

//           <div className="iPadShell">
//             <div  className="omniPanelContainer">
//               <div  className="omniPanel">
//                 <div className="omniSearch">
//                 <img src={SearchBar} className="omniSearch" alt="" />
//                 </div>
//                 {dockVisible ? 
//                 <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  
//                 <div className="dockWithApps">
//                   <div className="nextTemplateContainer">
//                     <img src={nextTemplate} className="nextTemplate" alt=''/>
//                   </div>

//                   <div className="balloonWrenchContainer">
//                     <img src={balloonWrench} className="balloonWrench" alt=''/>
//                   </div>

//                   <div className="earthContainer">
//                     <img src={earth} className="earth" alt=''/>
//                   </div>

//                   <div onClick={()=>rotateGrid()} className="rotateContainer">  
//                     <img src={rotate} className="rotate" alt=''/>
//                   </div>

//                   <div className="eyeContainer">
//                     <img src={eye} className="eye" alt=''/>
//                   </div>

//                   <div className="clockContainer">
//                     <img src={clock} className="clock" alt=''/>
//                   </div>

//                   <div onClick={()=>nextTemplateClicked()} className="nextTemplateContainer">
//                     <img src={previousTemplate} className="previousTemplate" alt=''/>
//                   </div>
//                 </div>
//               </div>
//                 :
//                   <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
//                   <div className="dock">
//                     {omniLabel}
//                   </div>
//                 </div>
//                 }
//               </div>
//             </div>
//             <div className="iPadContentSpace">
//               {currentTemplate[1] === 'Default' ? <img src={Tree} className="treeTemplate" alt="" /> : 
              
//               <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
//               <source src="/Tree.mp4" type="video/mp4"></source>
//               </video>
              
//               // Rename the all else to remaining non sciences and remaining sciences...such that you dont need the extra noise of explanatory items.
//               } 

//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default DApps;