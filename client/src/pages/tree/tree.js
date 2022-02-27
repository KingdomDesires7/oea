import React, {useState} from 'react';
import './tree.css';

function App() {
  const [omniLabel, setOmniLabel] = useState('Omnibox Extension App')
  
  const mouseOverDock = () => {
    console.log('sss')
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

      </div>
  );
}

export default App;
