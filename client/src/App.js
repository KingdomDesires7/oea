import React from 'react';
// import Router from './Router';
// import Routes from './routes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Tree from './pages/tree/Tree';

function App() {

  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route path='/tree' element={<Tree />} />
    </Routes>
  );
}

export default App;
