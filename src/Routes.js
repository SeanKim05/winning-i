import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './pages/Board';
import Main from './pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
