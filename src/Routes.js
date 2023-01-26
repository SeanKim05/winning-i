import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import { ListDetail } from './pages/ListDetail';
import Login from './pages/Login';
import Main from './pages/Main';
import Posting from './pages/Posting';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/" element={<Login />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/detail/:id" element={<ListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
