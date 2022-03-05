import React from 'react';
// import Router from './Router';
// import Routes from './routes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Tree from './pages/tree/Tree';
import Health from './pages/health/Health';

function App() {


  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route path='/tree' element={<Tree />} />
      <Route
        path='/health'
        element={<Health />}
      />
    </Routes>
  );
}

export default App;
