import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Header.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './MapPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  </BrowserRouter>
);
