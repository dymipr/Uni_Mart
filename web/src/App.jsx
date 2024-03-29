import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Staking from './components/pages/staking';
import ModalNavbar from './components/Common/staking/modalNavbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="staking" element={<Staking />} />
            <Route path="modal" element={<ModalNavbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
