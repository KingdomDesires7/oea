import React, { useState, useEffect } from 'react';
import './HealthDock.css';
// * REDUX
import { useSelector } from 'react-redux';
// ! ~~~

export default function HealthDock() {
    const healthTabProp = 'uDoc'
    const [healthTabSelected, setHealthTabSelected] = useState(healthTabProp)
    // * REDUX
    const appSelected = useSelector(state => state.appSelected);
    // ! ~~~

    useEffect(() => {
      const uHealthContainer = document.querySelector('.uHealthContainer')
      const uDocContainer = document.querySelector('.uDocContainer')
      const healthAllElseContainer = document.querySelector('.healthAllElseContainer')
      if (appSelected === 'UDOC') {
      uDocContainer.style.color = '#5ab3a7'
      healthAllElseContainer.style.color = '#FFFFFF'
      uHealthContainer.style.color = '#FFFFFF'
      }

      if (appSelected === 'UHEALTHINFO') {
      uDocContainer.style.color = '#FFFFFF'
      healthAllElseContainer.style.color = '#FFFFFF'
      uHealthContainer.style.color = '#5ab3a7'
      }

      if (appSelected === 'UHEALTH') {
      uDocContainer.style.color = '#FFFFFF'
      healthAllElseContainer.style.color = '#5ab3a7'
      uHealthContainer.style.color = '#FFFFFF'
      }

    }, [])


  const uDocClicked = () => {
    setHealthTabSelected('uDoc')
    const uHealthContainer = document.querySelector('.uHealthContainer')
    const uDocContainer = document.querySelector('.uDocContainer')
    const healthAllElseContainer = document.querySelector('.healthAllElseContainer')
    uDocContainer.style.color = '#5ab3a7'
    healthAllElseContainer.style.color = '#FFFFFF'
    uHealthContainer.style.color = '#FFFFFF'
}

  const uHealthClicked = () => {
    setHealthTabSelected('uHealth')
    const uHealthContainer = document.querySelector('.uHealthContainer')
    const uDocContainer = document.querySelector('.uDocContainer')
    const healthAllElseContainer = document.querySelector('.healthAllElseContainer')
    uDocContainer.style.color = '#FFFFFF'
    healthAllElseContainer.style.color = '#FFFFFF'
    uHealthContainer.style.color = '#5ab3a7'
}

  const healthAllElseClicked = () => {
    setHealthTabSelected('allElseHealth')
    const uHealthContainer = document.querySelector('.uHealthContainer')
    const uDocContainer = document.querySelector('.uDocContainer')
    const healthAllElseContainer = document.querySelector('.healthAllElseContainer')
    uDocContainer.style.color = '#FFFFFF'
    healthAllElseContainer.style.color = '#5ab3a7'
    uHealthContainer.style.color = '#FFFFFF'
}

  return (
    <div className="healthDockContainer">
        <div className="healthDock">
            <div onClick={() => uDocClicked()} className="uDocContainer">uDoc</div>
            <div>|</div>
            <div  onClick={() => uHealthClicked()} className="uHealthContainer">uHealth</div>
            <div>|</div>
            <div  onClick={() => healthAllElseClicked()} className="healthAllElseContainer">All Else</div>
        </div>

        <div className="healthDockContentSpace">
            {healthTabSelected === 'uDoc' ?
                <div>uDoc</div> 
                    : healthTabSelected === 'uHealth' ?
                <div>uHealth</div> : <div>all else</div>
        }
        </div>
    </div>
  )
}