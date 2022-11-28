import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Home, FindTour, DetailPage } from "./pages";

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tour" element={<FindTour />} />
    <Route path="/detailPage" element={<DetailPage />} />
  </Routes>

);

export default App;
