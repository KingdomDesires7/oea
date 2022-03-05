import React, { useState, useEffect } from 'react';
// import Router from './Router';
// import Routes from './routes';
import OmniboxPanel from '../../components/OmniboxPanel/OmniboxPanel';
import DApps from './DApps';
import './Home.css';
import iPadProFrame from '../../assets/images/iPadProFrame.png';
import { Link } from 'react-router-dom'; 
import Consumer from '../../assets/images/Consumer.png';
// import Business from '../../assets/images/Business.png';
// import SearchBar from '../../assets/images/SearchBar.png';
import tree from '../../assets/images/icons/tree.png';
import nextTemplate from '../../assets/images/uDock/downArrow.png';
import previousTemplate from '../../assets/images/uDock/upArrow.png';
import balloonWrench from '../../assets/images/uDock/balloon-wrench.png';
// import balloonWrenchFilled from '../../assets/images/uDock/balloon-wrench-filled.png';
import earth from '../../assets/images/uDock/earth.png';
// import earthFilled from '../../assets/images/uDock/earth-filled.png';
import clock from '../../assets/images/uDock/clock.png';
// import clockFilled from '../../assets/images/uDock/clock-filled.png';
import eye from '../../assets/images/uDock/eye.png';
// import eyeFilled from '../../assets/images/uDock/eye-filled.png';
import rotate from '../../assets/images/uDock/rotate.png';
import doctor from '../../assets/images/icons/doctor.png';
// import doctorFilled from '../../assets/images/icons/doctor-filled.png';
import law from '../../assets/images/icons/law.png';
// import lawFilled from '../../assets/images/icons/law-filled.png';
import lawyer from '../../assets/images/icons/lawyer.png';
// import lawyerFilled from '../../assets/images/icons/lawyer-filled.png';
import calendar from '../../assets/images/icons/calendar.png';
// import calendarFilled from '../../assets/images/icons/calendar-filled.png';
import messages from '../../assets/images/icons/messages.png';
// import messagesFilled from '../../assets/images/icons/messages-filled.png';
import wall from '../../assets/images/icons/wall.png';
// import wallFilled from '../../assets/images/icons/wall-filled.png';
import circles from '../../assets/images/icons/circles.png';
// import circlesFilled from '../../assets/images/icons/circles-filled.png';
// import network from '../../assets/images/icons/network.png';
// import networkFilled from '../../assets/images/icons/network-filled.png';
// import groups from '../../assets/images/icons/groups.png';
// import groupsFilled from '../../assets/images/icons/groups-filled.png';
import goods from '../../assets/images/icons/goods.png';
// import goodsFilled from '../../assets/images/icons/goods-filled.png';
import services from '../../assets/images/icons/services.png';
// import servicesFilled from '../../assets/images/icons/services-filled.png';
import design from '../../assets/images/icons/design.png';
// import designFilled from '../../assets/images/icons/design-filled.png';
import engineering from '../../assets/images/icons/engineering.png';
// import engineeringFilled from '../../assets/images/icons/engineering-filled.png';
import income from '../../assets/images/icons/income.png';
// import incomeFilled from '../../assets/images/icons/income-filled.png';
import balances from '../../assets/images/icons/balances.png';
// import balancesFilled from '../../assets/images/icons/balances-filled.png';
import cashflow from '../../assets/images/icons/cashflow.png';
// import cashflowFilled from '../../assets/images/icons/cashflow-filled.png';
import diet from '../../assets/images/icons/diet.png';
// import dietFilled from '../../assets/images/icons/diet-filled.png';
import health from '../../assets/images/icons/health.png';
// import healthFilled from '../../assets/images/icons/health-filled.png';
import train from '../../assets/images/icons/train.png';
// import trainFilled from '../../assets/images/icons/train-filled.png';
import cardio from '../../assets/images/icons/cardio.png';
// import cardioFilled from '../../assets/images/icons/cardio-filled.png';
import news from '../../assets/images/icons/news.png';
// import newsFilled from '../../assets/images/icons/news-filled.png';
import reviews from '../../assets/images/icons/reviews.png';
// import reviewsFilled from '../../assets/images/icons/reviews-filled.png';
import notes from '../../assets/images/icons/notes.png';
// import notesFilled from '../../assets/images/icons/notes-filled.png';
import drive from '../../assets/images/icons/drive.png';
// import driveFilled from '../../assets/images/icons/drive-filled.png';
import stream from '../../assets/images/icons/stream.png';
// import streamFilled from '../../assets/images/icons/stream-filled.png';
import home from '../../assets/images/icons/home.png';
// import homeFilled from '../../assets/images/icons/home-filled.png';
import game from '../../assets/images/icons/game.png';
// import gameFilled from '../../assets/images/icons/game-filled.png';
import learn from '../../assets/images/icons/learn.png';
// import learnFilled from '../../assets/images/icons/learn-filled.png';
import books from '../../assets/images/icons/books.png';
// import booksFilled from '../../assets/images/icons/books-filled.png';
import solar from '../../assets/images/icons/solar.png';
// import solarFilled from '../../assets/images/icons/solar-filled.png';
import maintenance from '../../assets/images/icons/maintenance.png';
// import maintenanceFilled from '../../assets/images/icons/maintenance-filled.png';
import runner from '../../assets/images/icons/runner.png';
// import runnerFilled from '../../assets/images/icons/runner-filled.png';
import stocks from '../../assets/images/icons/stocks.png';
// import stocksFilled from '../../assets/images/icons/stocks-filled.png';
import alts from '../../assets/images/icons/alts.png';
// import altsFilled from '../../assets/images/icons/alts-filled.png';
import bonds from '../../assets/images/icons/bonds.png';
// import bondsFilled from '../../assets/images/icons/bonds-filled.png';
import dashboard from '../../assets/images/icons/dashboard.png';
// import dashboardFilled from '../../assets/images/icons/dashboard-filled.png';
import tasks from '../../assets/images/icons/tasks.png';
// import tasksFilled from '../../assets/images/icons/tasks-filled.png';
import mail from '../../assets/images/icons/mail.png';
// import mailFilled from '../../assets/images/icons/mail-filled.png';
import BalloonWrenchModal from '../../components/Modals/BalloonWrenchModal';


// * REDUX \\
import { useSelector, useDispatch } from 'react-redux';
import { homeAction } from '../../redux/actions';
import { uDocAction } from '../../redux/actions';
import { uHealthInfoAction } from '../../redux/actions';
// ! ~~~~~~~


function Home() {
  const [omniLabel, setOmniLabel] = useState('Omnibox Extension App')
  const [dockVisible, setDockVisible] = useState(false)
  const [consumerVisible, setConsumerVisible] = useState(true)
  const [template, setTemplate] = useState('GApps')
  const [balloonWrenchOpen, setBalloonWrenchOpen] = useState(false)
  // * REDUX
  const appSelected = useSelector(state => state.appSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(homeAction)
    // setOmniLabel(appSelected)
  }, [])
  
  const mouseOverDock = () => {
    if (appSelected === "HOME") {
    if (dockVisible) {
      setDockVisible(false)
    } else { setDockVisible(true) }
  }
  }

  const mouseLeaveDock = () => {
    if (appSelected === "HOME") {
    if (dockVisible) {
      setDockVisible(false)
    } else { setDockVisible(true) }}
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

  const mouseOverIcon = (Icon) => {
    if (Icon === 'tree') {
      setOmniLabel('Tree of Knowledge')
    }
    if (Icon === 'doctor') {
      setOmniLabel('uDoc')
    }
    if (Icon === 'law') {
      setOmniLabel('uLaw')
    }
    if (Icon === 'lawyer') {
      setOmniLabel('uLawyer')
    }
    if (Icon === 'wall') {
      setOmniLabel('uWall')
    }
    if (Icon === 'circles') {
      setOmniLabel('uCircles')
    }
    if (Icon === 'network') {
      setOmniLabel('uNetwork')
    }
    if (Icon === 'groups') {
      setOmniLabel('uGroups')
    }
    if (Icon === 'calendar') {
      setOmniLabel('uCalendar')
    }
    if (Icon === 'messages') {
      setOmniLabel('uMessages')
    }
    if (Icon === 'goods') {
      setOmniLabel('uGoods')
    }
    if (Icon === 'services') {
      setOmniLabel('uServices')
    }
    if (Icon === 'design') {
      setOmniLabel('uDesign')
    }
    if (Icon === 'engineering') {
      setOmniLabel('uEngineer')
    }
    if (Icon === 'income') {
      setOmniLabel('uIncome')
    }
    if (Icon === 'balances') {
      setOmniLabel('uBalances')
    }
    if (Icon === 'cashflow') {
      setOmniLabel('uCashflow')
    }
    if (Icon === 'diet') {
      setOmniLabel('uDiet')
    }
    if (Icon === 'train') {
      setOmniLabel('uTrain')
    }
    if (Icon === 'cardio') {
      setOmniLabel('uCardio')
    }
    if (Icon === 'reviews') {
      setOmniLabel('uReviews')
    }
    if (Icon === 'news') {
      setOmniLabel('uNews')
    }
    if (Icon === 'notes') {
      setOmniLabel('uNotes')
    }
    if (Icon === 'drive') {
      setOmniLabel('uDrive')
    }
    if (Icon === 'home') {
      setOmniLabel('uHome')
    }
    if (Icon === 'stream') {
      setOmniLabel('uStream')
    }
    if (Icon === 'game') {
      setOmniLabel('uGame')
    }
    if (Icon === 'solar') {
      setOmniLabel('uSolar')
    }
    if (Icon === 'learn') {
      setOmniLabel('uLearn')
    }
    if (Icon === 'books') {
      setOmniLabel('uBooks')
    }
    if (Icon === 'runner') {
      setOmniLabel('uRunner')
    }
    if (Icon === 'maintenance') {
      setOmniLabel('uMaintenance')
    }
    if (Icon === 'alts') {
      setOmniLabel('uAlts')
    }
    if (Icon === 'stocks') {
      setOmniLabel('ustocks')
    }
    if (Icon === 'bonds') {
      setOmniLabel('uBonds')
    }
    if (Icon === 'dashboard') {
      setOmniLabel('uDashboard')
    }
    if (Icon === 'tasks') {
      setOmniLabel('uTasks')
    }
    if (Icon === 'mail') {
      setOmniLabel('uMail')
    }
    if (Icon === 'health') {
      setOmniLabel('uHealthInfo')
    }
  }

  const mouseLeaveIcon = () => {
      setOmniLabel('Omnibox Extension App')
  }

  const rotateGrid = () => {
    setConsumerVisible(!consumerVisible)
  }

  const treeClicked = () => {
  }
// * HEALTH
  const doctorClicked = () => {
    dispatch(uDocAction())
  }

  const healthClicked = () => {
    dispatch(uHealthInfoAction())
  }
// ! ~~~
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

  return (
    <div className="mainContainer">
        {balloonWrenchOpen && <BalloonWrenchModal />}
        <div className="iPadShellContainer">
        <img src={iPadProFrame} className="iPadShell" alt="" />

          <div className="iPadShell">
            <div className="omniPanelContainer">
              <div  className="omniPanel">
                <OmniboxPanel dockIconVisible='home' />
                {dockVisible ? 
                <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  
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
                  <div onMouseEnter={() => mouseOverDock()} onMouseLeave={()=>mouseLeaveDock()} className="dockContainer">
                  <div className="dock">
                    {omniLabel}
                  </div>
                </div>
                }

              </div>
            </div>
            <div className="iPadContentSpace">

                { consumerVisible && template === 'GApps' ? 
                <>
              {/* {GApps()} */}
              {/* {<GApps mouseoverIcon={mouseOverIcon} treeClicked={treeClicked} omnilabel={omniLabel} setOmnilabel={setOmniLabel}/>} */}
             
              <img src={Consumer} className="consumerTemplate" alt="" />
                <Link to="tree">
                  <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('tree')} onMouseLeave={() => mouseLeaveIcon()} className="treeContainerC">
                    <img src={tree} alt='' className="tree" />
                  </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('law')} onMouseLeave={() => mouseLeaveIcon()} className="lawContainerC">
                      <img src={law} alt='' className="law" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('calendar')} onMouseLeave={() => mouseLeaveIcon()} className="calendarContainerC">
                      <img src={calendar} alt='' className="calendar" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('messages')} onMouseLeave={() => mouseLeaveIcon()} className="messagesContainerC">
                      <img src={messages} alt='' className="messages" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('wall')} onMouseLeave={() => mouseLeaveIcon()} className="wallContainerC">
                      <img src={wall} alt='' className="wall" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('circles')} onMouseLeave={() => mouseLeaveIcon()} className="circlesContainerC">
                      <img src={circles} alt='' className="circles" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('goods')} onMouseLeave={() => mouseLeaveIcon()} className="goodsContainerC">
                      <img src={goods} alt='' className="goods" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('services')} onMouseLeave={() => mouseLeaveIcon()} className="servicesContainerC">
                      <img src={services} alt='' className="services" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('design')} onMouseLeave={() => mouseLeaveIcon()} className="designContainerC">
                      <img src={design} alt='' className="design" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('engineering')} onMouseLeave={() => mouseLeaveIcon()} className="engineeringContainerC">
                      <img src={engineering} alt='' className="engineering" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('income')} onMouseLeave={() => mouseLeaveIcon()} className="incomeContainerC">
                      <img src={income} alt='' className="income" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('balances')} onMouseLeave={() => mouseLeaveIcon()} className="balancesContainerC">
                      <img src={balances} alt='' className="balances" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('cashflow')} onMouseLeave={() => mouseLeaveIcon()} className="cashflowContainerC">
                      <img src={cashflow} alt='' className="cashflow" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('diet')} onMouseLeave={() => mouseLeaveIcon()} className="dietContainerC">
                      <img src={diet} alt='' className="diet" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('train')} onMouseLeave={() => mouseLeaveIcon()} className="trainContainerC">
                      <img src={train} alt='' className="train" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('cardio')} onMouseLeave={() => mouseLeaveIcon()} className="cardioContainerC">
                      <img src={cardio} alt='' className="cardio" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('reviews')} onMouseLeave={() => mouseLeaveIcon()} className="reviewsContainerC">
                      <img src={reviews} alt='' className="reviews" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('news')} onMouseLeave={() => mouseLeaveIcon()} className="newsContainerC">
                      <img src={news} alt='' className="news" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('lawyer')} onMouseLeave={() => mouseLeaveIcon()} className="lawyerContainerC">
                      <img src={lawyer} alt='' className="lawyer" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('notes')} onMouseLeave={() => mouseLeaveIcon()} className="notesContainerC">
                      <img src={notes} alt='' className="notes" />
                    </div> 
                  </Link>

                  <Link to="health">
                    <div onClick={()=>doctorClicked()} onMouseEnter={() => mouseOverIcon('doctor')} onMouseLeave={() => mouseLeaveIcon()} className="doctorContainerC">
                      <img src={doctor} alt='' className="doctor" />
                    </div> 
                  </Link>

                  <Link to="health">
                    <div onClick={()=>healthClicked()} onMouseEnter={() => mouseOverIcon('health')} onMouseLeave={() => mouseLeaveIcon()} className="healthContainerC">
                      <img src={health} alt='' className="health" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('drive')} onMouseLeave={() => mouseLeaveIcon()} className="driveContainerC">
                      <img src={drive} alt='' className="drive" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('home')} onMouseLeave={() => mouseLeaveIcon()} className="homeContainerC">
                      <img src={home} alt='' className="home" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('game')} onMouseLeave={() => mouseLeaveIcon()} className="gameContainerC">
                      <img src={game} alt='' className="game" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('stream')} onMouseLeave={() => mouseLeaveIcon()} className="streamContainerC">
                      <img src={stream} alt='' className="stream" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('solar')} onMouseLeave={() => mouseLeaveIcon()} className="solarContainerC">
                      <img src={solar} alt='' className="solar" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('learn')} onMouseLeave={() => mouseLeaveIcon()} className="learnContainerC">
                      <img src={learn} alt='' className="learn" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('books')} onMouseLeave={() => mouseLeaveIcon()} className="booksContainerC">
                      <img src={books} alt='' className="books" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('runner')} onMouseLeave={() => mouseLeaveIcon()} className="runnerContainerC">
                      <img src={runner} alt='' className="runner" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('maintenance')} onMouseLeave={() => mouseLeaveIcon()} className="maintenanceContainerC">
                      <img src={maintenance} alt='' className="maintenance" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('stocks')} onMouseLeave={() => mouseLeaveIcon()} className="stocksContainerC">
                      <img src={stocks} alt='' className="stocks" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('bonds')} onMouseLeave={() => mouseLeaveIcon()} className="bondsContainerC">
                      <img src={bonds} alt='' className="bonds" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('alts')} onMouseLeave={() => mouseLeaveIcon()} className="altsContainerC">
                      <img src={alts} alt='' className="alts" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('dashboard')} onMouseLeave={() => mouseLeaveIcon()} className="dashboardContainerC">
                      <img src={dashboard} alt='' className="dashboard" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('tasks')} onMouseLeave={() => mouseLeaveIcon()} className="tasksContainerC">
                      <img src={tasks} alt='' className="tasks" />
                    </div> 
                  </Link>

                  <Link to="tree">
                    <div onClick={()=>treeClicked()} onMouseEnter={() => mouseOverIcon('mail')} onMouseLeave={() => mouseLeaveIcon()} className="mailContainerC">
                      <img src={mail} alt='' className="mail" />
                    </div> 
                  </Link>


              </>
              : 
              <>
              {DApps()}
              </>
                }

            </div>
          </div>
        </div>
      </div>
  );
}
export default Home;
