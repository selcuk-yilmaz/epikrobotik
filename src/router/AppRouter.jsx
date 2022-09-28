import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pages1 from "../pages/Pages1";
import Pages2 from "../pages/Pages2";
import Pages3 from "../pages/Pages3";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Pages1 />} />
        <Route path="/pages2" element={<Pages2 />} />
        <Route path="/pages3" element={<Pages3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
