import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Home, FindTour, DetailPage, WalkingTour,BikeTour,FoodTour } from "./pages";

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tour" element={<FindTour />} />
    <Route path="/detailPage/:destinationId" element={<DetailPage />} />
    <Route path="/walking-tour" element={<WalkingTour />} />
    <Route path="/bike-tour" element={<BikeTour />} />
    <Route path="/food-tour" element={<FoodTour />} />
  </Routes>

);

export default App;
