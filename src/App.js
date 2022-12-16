import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Home, FindTour, DetailPage, WalkingTour } from "./pages";

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tour" element={<FindTour />} />
    <Route path="/detailPage" element={<DetailPage />} />
    <Route path="/walking-tour" element={<WalkingTour />} />
  </Routes>

);

export default App;
