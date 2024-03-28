import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';

export const CarContext = createContext(null);

function App() {

  return (
    <CarContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarContext.Provider>
  );
}

export default App;
