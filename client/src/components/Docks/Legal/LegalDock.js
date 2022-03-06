import React, { useState, useEffect } from 'react';
import './LegalDock.css';
import LegalTabs from './LegalTabs';
// * REDUX
import { useSelector } from 'react-redux';
// ! ~~~

export default function LegalDock() {
    const LegalTabProp = 'uDoc'
    const [LegalTabSelected, setLegalTabSelected] = useState(LegalTabProp)
    // * REDUX
    const appSelected = useSelector(state => state.appSelected);
    // ! ~~~


  return (
    <div className="LegalDockContainer">
      <LegalTabs />
    </div>
  )
}