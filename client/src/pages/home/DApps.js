import React from 'react';
import './DApps.css';
import Blackness from '../../assets/images/Blackness.png';
import contact from '../../assets/images/DApps/contact.png';
import documents from '../../assets/images/DApps/documents.png';
import dashboard from '../../assets/images/DApps/dashboard.png';
import education from '../../assets/images/DApps/education.png';
import entertainment from '../../assets/images/DApps/entertainment.png';
import financials from '../../assets/images/DApps/financials.png';
import fitness from '../../assets/images/DApps/fitness.png';
import health from '../../assets/images/DApps/health.png';
import home from '../../assets/images/DApps/home.png';
import investments from '../../assets/images/DApps/investments.png';
import legal from '../../assets/images/DApps/legal.png';
import news from '../../assets/images/DApps/news.png';
import planning from '../../assets/images/DApps/planning.png';
import reviews from '../../assets/images/DApps/reviews.png';
import social from '../../assets/images/DApps/social.png';
import store from '../../assets/images/DApps/store.png';
import treeDApp from '../../assets/images/DApps/treeDApp.png';
import web from '../../assets/images/DApps/web.png';
import workers from '../../assets/images/DApps/workers.png';

export default function DApps() {
  return (
    <>
    <img src={Blackness} className="Blackness" alt="" />
    <div className="desktopAppContainer">
      <div className="desktopAppRowUno">

          <div className="housingContainer">
            <div className="genericContainer container1">
                <img src={contact} alt="" className="DAppsIcon"/>
            </div>
            <div className="DAppLabel">Contact</div>
          </div>

          <div className="housingContainer">
            <div className="genericContainer container2">
              <img src={documents} alt="" className="DAppsIcon"/>
            </div>
            <div className="DAppLabel">Documents</div>
          </div>

            <div className="housingContainer">
          <div className="genericContainer container3">
            <img src={dashboard} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Dashboard</div>
          </div>

            <div className="housingContainer">
          <div className="genericContainer container4">
            <img src={education} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Education</div>
          </div>

            <div className="housingContainer">
          <div className="genericContainer container5">
            <img src={entertainment} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Entertainment</div>
          </div>

      </div>
      <div className="desktopAppRowDos">

         <div className="housingContainer">
          <div className="genericContainer container6">
            <img src={financials} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Financials</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container7">
            <img src={fitness} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Fitness</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container8">
            <img src={health} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Health</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container9">
            <img src={home} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Home</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container10">
            <img src={investments} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Investments</div>
          </div>


      </div>
      <div className="desktopAppRowTres">

         <div className="housingContainer">
          <div className="genericContainer container11">
            <img src={legal} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Legal</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container12">
            <img src={news} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">News</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container13">
            <img src={planning} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Planning</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container14">
             <img src={reviews} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Reviews</div>
          </div>

         <div className="housingContainer">
          <div className="genericContainer container15">
             <img src={social} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Social</div>
          </div>
      </div>


      <div className="desktopAppRowCuatro">
      <div className="housingContainer">
          <div className="genericContainer container16">
            <img src={store} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Store</div>
          </div>

          <div className="housingContainer">
          <div className="genericContainer container17">
            <img src={treeDApp} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Tree</div>
          </div>

          <div className="housingContainer">
          <div className="genericContainer container18">
            <img src={web} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Web</div>
          </div>

          <div className="housingContainer">
          <div className="genericContainer container19">
            <img src={workers} alt="" className="DAppsIcon"/>
          </div>
            <div className="DAppLabel">Workers</div>
          </div>


      </div>
      <div className="desktopAppRowCinco"></div>
    </div>
    </>
  )
}

