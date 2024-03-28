import React, { useState } from 'react';
import "./App.css";

import Navbar from "./components/Common/Navbar";
import Hero from "./components/Views/Hero";
import NyxCipher from "./components/Views/nyxCipher";
import Advantage from "./components/Views/advantage";
import NyxToolkit from "./components/Views/nyxToolkit";
import NyxVsPaal from "./components/Views/nyxVsPaal";
import Partnering from "./components/Views/partnering";
import JoinUs from "./components/Views/joinUs";
import Faqs from "./components/Views/faqs";
import Footer from "./components/Views/footer";

function App() {

  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <NyxCipher />
      <Advantage />
      <NyxToolkit />
      <NyxVsPaal />
      <Partnering />
      <JoinUs />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
