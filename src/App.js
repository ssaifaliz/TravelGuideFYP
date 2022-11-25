import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Home, FindTour } from "./pages";

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tour" element={<FindTour />} />

  </Routes>

);

export default App;
