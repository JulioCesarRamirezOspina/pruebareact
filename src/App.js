import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Qr from './pages/Qr';
import Fin from './pages/Fin';
import NoPage from './pages/NoPage';
import Mapa from './pages/Mapa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/fin" element={<Fin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
