import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Home, FindTour, DetailPage, TourPackages,BikeTour,FoodTour,PackagesDetails } from "./pages";

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tour" element={<FindTour />} />
    <Route path="/detailPage/:destinationId" element={<DetailPage />} />
    <Route path="/tour-packages" element={<TourPackages />} />
    <Route path="/bike-tour" element={<BikeTour />} />
    <Route path="/food-tour" element={<FoodTour />} />
    <Route path="/package-detail" element={<PackagesDetails />} />

  </Routes>

);

export default App;
