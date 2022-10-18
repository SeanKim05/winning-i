import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../src/styles/GlobalStyle';
import List from './pages/List';
import { ListDetail } from './pages/ListDetail';
import Main from './pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<ListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
