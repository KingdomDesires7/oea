import React from 'react';
// import Router from './Router';
// import Routes from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Tree from './pages/tree/Tree';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route path={`/tree`} element={<Tree />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
