import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NGOHome from "./pages/NGOHome";
import DonorHome from "./pages/DonorHome";
import CreateBundle from "./pages/CreateBundle";
import BundleDetails from "./pages/BundleDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ngo" element={<NGOHome />} />
        <Route path="/donor" element={<DonorHome />} />
        <Route path="/create-bundle" element={<CreateBundle />} />
        <Route path="/bundle/:id" element={<BundleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
