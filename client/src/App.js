import './App.css';
import iPadShell from './assets/images/iPadShell.png';
// import Consumer from './assets/images/ConsumerTemplate.png';
import Consumer from './assets/images/ConsumerTemplateGrey.png';
import SearchBar from './assets/images/SearchBar.png';

function App() {
  return (
    <div className="mainContainer">
        <div className="iPadShellContainer">
          <div className="iPadShell">

            <div className="omniPanelContainer">
              <div className="omniPanel">
                <div className="omniSearch">
                <img src={SearchBar} className="omniSearch" alt="" />
                </div>
                <div className="dockContainer">
                  <div className="dock">
                    Omnibox Extension App
                  </div>
                </div>
              </div>
            </div>
            <img src={iPadShell} className="iPadShell" alt="" />
            <div className="iPadContentSpace">
              <img src={Consumer} className="consumerTemplate" alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
